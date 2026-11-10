"""Build both one-page resumes from the site's shared professional data.
Run node scripts/export-cv-content.cjs first. Uses bundled ReportLab/PDFium tooling.
"""
from pathlib import Path
import json
import shutil
from xml.sax.saxutils import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from pypdf import PdfReader
import pypdfium2 as pdfium

for name, filename in [('ArialCV', 'arial.ttf'), ('ArialCVBold', 'arialbd.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path('C:/Windows/Fonts') / filename)))
pdfmetrics.registerFontFamily('ArialCV', normal='ArialCV', bold='ArialCVBold')
body = ParagraphStyle('body', fontName='ArialCV', fontSize=9.4, leading=12.8,
                      textColor=colors.HexColor('#273341'), spaceAfter=4)
small = ParagraphStyle('small', fontName='ArialCV', fontSize=8.6, leading=11.8,
                       textColor=colors.HexColor('#425466'), spaceAfter=3)
heading = ParagraphStyle('heading', fontName='ArialCVBold', fontSize=10, leading=13,
                         textColor=colors.HexColor('#116778'), spaceBefore=9, spaceAfter=6)
name_style = ParagraphStyle('name', fontName='ArialCVBold', fontSize=21, leading=26,
                            textColor=colors.HexColor('#142533'), spaceAfter=4)
role_style = ParagraphStyle('role', fontName='ArialCVBold', fontSize=10.8, leading=14,
                            textColor=colors.HexColor('#116778'), spaceAfter=5)
bullet = ParagraphStyle('bullet', parent=body, leftIndent=9, firstLineIndent=-9, spaceAfter=3)
labels = {
    'en': ['PROFILE', 'PROFESSIONAL EXPERIENCE', 'EDUCATION', 'SELECTED PROJECTS', 'TECHNOLOGIES & LANGUAGES'],
    'es': ['PERFIL', 'EXPERIENCIA PROFESIONAL', 'FORMACIÓN', 'PROYECTOS SELECCIONADOS', 'TECNOLOGÍAS E IDIOMAS'],
}
content = json.loads(Path('.artifacts/cv/content.json').read_text(encoding='utf8'))
for language, data in content.items():
    profile = data['professional']
    story = []
    def add(text, style=body):
        # Keep all hyphenation ASCII while preserving names and Spanish accents.
        story.append(Paragraph(text.replace('\u2013', '-').replace('\u2014', '-').replace('\u2011', '-'), style))
    add(escape(profile['name']), name_style)
    add(escape(profile['role']), role_style)
    add(escape(profile['location'] + ' | ' + profile['availability']), small)
    add(f'<link href="mailto:{profile["email"]}" color="#116778">{profile["email"]}</link> | '
        f'<link href="{profile["github"]}" color="#116778">github.com/GaitanJulian</link> | '
        f'<link href="{profile["linkedin"]}" color="#116778">linkedin.com/in/gaitanjuliandev</link>', small)
    add(labels[language][0], heading)
    add(escape(profile['summary']))
    add(labels[language][1], heading)
    for job in data['experience']:
        add('<b>' + escape(job['company'] + ' | ' + job['role']) + '</b>')
        add(escape(job['period']), small)
        if job['company'] == 'Campuslands':
            add(escape('. '.join(job['context'].split('. ')[:2]) + '.'), small)
        for item in job['bullets']:
            add('- ' + escape(item), bullet)
        story.append(Spacer(1, 3))
    add(labels[language][2], heading)
    add('<b>' + escape(profile['degree']) + '</b> | ' + escape(profile['university']))
    add(escape(profile['graduation']), small)
    add(labels[language][3], heading)
    for project in data['projects']:
        title = escape(project['title'])
        description = profile['thesisContribution'] if project['id'] == 'xr-thesis' else project['description']
        if project['links']:
            title = '<link href="' + project['links'][0]['href'] + '" color="#116778">' + title + '</link>'
        add('<b>' + title + '</b> - ' + escape(description), small)
    add(labels[language][4], heading)
    skills = 'Vue.js · Node.js · JavaScript · REST APIs · Meta/WhatsApp API · '
    skills += 'LLM evaluation · Computer vision · Unity · C#' if language == 'en' else 'Evaluación de LLM · Visión por computadora · Unity · C#'
    add(escape(skills), small)
    add(escape(profile['languages']), small)
    target = Path('output/pdf') / f'julian-gaitan-{language}.pdf'
    target.parent.mkdir(parents=True, exist_ok=True)
    SimpleDocTemplate(str(target), pagesize=(595.28, 841.89), rightMargin=40, leftMargin=40,
                      topMargin=34, bottomMargin=32, title=profile['name'] + ' - CV ' + language.upper(),
                      author=profile['name']).build(story)
    reader = PdfReader(str(target))
    assert len(reader.pages) == 1, 'Review layout before delivering: resume exceeded one page'
    text = reader.pages[0].extract_text()
    assert profile['name'] in text and 'Campuslands' in text and 'Invisible' in text
    assert not any(marker in text for marker in ['TO VERIFY', 'POR VERIFICAR', 'GameInsider'])
    public = Path('public/cv') / target.name
    public.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(target, public)
    document = pdfium.PdfDocument(str(target))
    document[0].render(scale=1.5).to_pil().save(f'.artifacts/cv/{language}-1.png')
    print(f'{language}: one page, extractable text, no pending fields; rendered for inspection')
