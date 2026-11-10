const assert = require('node:assert/strict');
const fs = require('node:fs');
const { load } = require('./export-cv-content.cjs');
load('src/i18n/interfaceCopy.ts');
const { professional, experience, capabilityGroups } = load('src/data/professional.ts');
const { projects } = load('src/data/projects.ts');
const { translate } = load('src/i18n/copy.ts');
const { queryPortfolioContext } = load('src/services/aiNavigator.ts');
assert.equal(projects.length, 7);
assert.equal(new Set(projects.map(p => p.id)).size, 7);
assert(!projects.some(p => p.id === 'gameinsider'));
assert.equal(projects.filter(p => p.featured).map(p => p.id).join(','), 'urban-map-bucaramanga,incidenthub,xr-thesis');
assert(projects.find(p => p.id === 'paymentflow').stack.includes('PostgreSQL'));
assert(!projects.find(p => p.id === 'paymentflow').stack.includes('MongoDB'));
assert(projects.find(p => p.id === 'statusboard').stack.includes('SQLite'));
assert(!projects.find(p => p.id === 'statusboard').stack.includes('PostgreSQL'));
assert(experience.find(j => j.company === 'Invisible').period.includes('2025'));
assert(experience.find(j => j.company === 'Campuslands').period.includes('Ended'));
assert(capabilityGroups.every(g => g.items.every(x => typeof x === 'string')));
for (const j of experience)
    for (const text of [j.period, j.context, ...j.bullets])
        assert.notEqual(translate(text, 'es'), text);
for (const p of projects)
    for (const text of [p.eyebrow, p.description, p.context, p.status, p.testing, p.tradeoffs, p.evidence, ...p.decisions])
        assert.notEqual(translate(text, 'es'), text);
assert.equal(translate('unlock lab', 'es'), 'unlock lab');
assert.equal(translate('profile.yaml', 'es'), 'profile.yaml');
assert.equal(translate('Close profile.yaml', 'es'), 'Cerrar profile.yaml');
assert.equal(translate('7 Systems Indexed', 'es'), '7 proyectos indexados');
assert(translate(queryPortfolioContext('disponibilidad').text, 'es').includes('Disponibilidad inmediata'));
assert(translate(queryPortfolioContext('What is Julian availability?').text, 'es').includes('Disponibilidad inmediata'));
assert(queryPortfolioContext('PostgreSQL').text.includes('SQLite'));
assert(translate(queryPortfolioContext('formación e idiomas').text, 'es').includes('Ingeniería'));
assert(!queryPortfolioContext('backend projects').text.includes('GameInsider'));
assert.equal(professional.name, 'Julián Andrés Gaitán Hernández');
for (const lang of ['es', 'en']) {
    const a = fs.readFileSync('output/pdf/julian-gaitan-' + lang + '.pdf'), b = fs.readFileSync('public/cv/julian-gaitan-' + lang + '.pdf');
    assert(a.equals(b));
    assert.equal(a.subarray(0, 4).toString(), '%PDF');
}
console.log('Content, bilingual copy, command preservation, AI routing, catalog and CV asset checks passed.');
