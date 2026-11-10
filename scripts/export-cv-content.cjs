const fs = require('fs'), path = require('path'), vm = require('vm'), ts = require('typescript');
const cache = new Map();
function load(file) { file = path.resolve(file); if (cache.has(file))
    return cache.get(file); const module = { exports: {} }; cache.set(file, module.exports); const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText; vm.runInNewContext(source, { module, exports: module.exports, require: name => load(path.resolve(path.dirname(file), name + '.ts')) }, { filename: file }); return module.exports; }
module.exports = { load };
if (require.main === module) {
    const { professional, experience, capabilityGroups } = load('src/data/professional.ts');
    const { projects } = load('src/data/projects.ts');
    const { translate } = load('src/i18n/copy.ts');
    const localize = value => typeof value === 'string' ? translate(value, 'es') : Array.isArray(value) ? value.map(localize) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v)])) : value;
    const en = { professional, experience, capabilityGroups, projects: projects.filter(p => p.featured) };
    fs.mkdirSync('.artifacts/cv', { recursive: true });
    fs.writeFileSync('.artifacts/cv/content.json', JSON.stringify({ en, es: localize(en) }, null, 2));
}
