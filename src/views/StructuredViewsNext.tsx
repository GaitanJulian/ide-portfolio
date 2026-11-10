import { projects } from '../data/projects';
import { professional, experience, capabilityGroups } from '../data/professional';
import { ProjectCard } from '../components/ProjectCard';
import { Localized } from '../i18n/Language';

export function ProfileViewNext() {
 return <Localized><div className="document structured-view"><section className="profile-shell">
  <div className="profile-hero"><div><p className="code-comment"># profile.yaml</p><h1>{professional.name}</h1><p className="profile-hero__role">{professional.role}</p><p className="profile-hero__tagline">{professional.availability}</p></div>
  <div className="profile-meta-card"><span>EDUCATION</span><strong>{professional.degree}</strong><p>{professional.university}</p><p>{professional.graduation}</p></div></div>
  <div className="profile-layout"><article className="profile-summary-card"><span>summary</span><p>{professional.summary}</p></article>
  <aside className="profile-facts-card"><span>metadata</span><div className="profile-facts-grid">{[['Location',professional.location],['Languages',professional.languages],['Availability',professional.availability],['Focus',professional.role]].map(([label,value])=><div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></aside></div>
  <section className="profile-focus-card"><div className="section-heading"><div><p className="eyebrow">Academic project</p><h2>{professional.thesis}</h2></div></div><p className="profile-hero__tagline">{professional.thesisContribution}</p><div className="tag-list">{['Unity','C#','Node.js'].map(item=><span className="tag" key={item}>{item}</span>)}</div></section>
 </section></div></Localized>;
}
export function ExperienceViewNext() {
 return <Localized><div className="document structured-view"><p className="code-comment">[experience.log] professional experience</p><div className="experience-timeline">{experience.map(job=><section className="experience-card" key={job.company}><span>{job.period}</span><h2>{job.company} | {job.role}</h2><p>{job.context}</p><ul>{job.bullets.map(item=><li key={item}>{item}</li>)}</ul><div className="tag-list">{job.technologies.map(item=><span className="tag" key={item}>{item}</span>)}</div></section>)}</div></div></Localized>;
}
export function CapabilitiesViewNext() {
 return <Localized><div className="document structured-view"><p className="code-comment">// capabilities.json</p><section className="capabilities-shell"><div className="section-heading"><div><p className="eyebrow">Technology and context</p><h1>Technical capabilities</h1></div></div><p className="capabilities-note">Technologies grouped by documented context, without arbitrary proficiency scores.</p><div className="capability-signal-grid">{capabilityGroups.map(group=><section key={group.title} className="capability-signal-card"><span>{group.title}</span><p className="capabilities-note">{group.context}</p><div className="tag-list">{group.items.map(item=><span className="tag" key={item}>{item}</span>)}</div></section>)}</div></section></div></Localized>;
}
export function SystemsViewNext({onOpen}:{onOpen:(fileId:string)=>void}) {
 return <Localized><div className="document structured-view"><div className="section-heading"><div><p className="eyebrow">systems/</p><h1>Project database</h1></div><span className="section-index">{String(projects.length).padStart(2,'0')} RECORDS</span></div><div className="project-grid project-grid--all">{projects.map(project=><ProjectCard key={project.id} project={project} onOpen={onOpen}/>)}</div></div></Localized>;
}
