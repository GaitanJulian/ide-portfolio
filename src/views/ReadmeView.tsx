import { Localized } from '../i18n/Language';
import { professional } from '../data/professional';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

interface ReadmeViewProps {
  onOpen: (fileId: string) => void;
  onAskAi: () => void;
}

export function ReadmeView({ onOpen, onAskAi }: ReadmeViewProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const proofCards = [
    [`${projects.length} Systems Indexed`, 'Workspace inventory'],
    ['English C1', 'Self-reported · Professional use'],
    ['Fully remote', 'Available immediately'],
    ['Backend / Full-stack / AI', 'Core technical focus'],
    ['AI Navigator Available', 'Portfolio context assistant'],
  ];

  return <Localized><div className="document readme-view">
      <section className="readme-home-card" aria-label="Julian Gaitan home card">
        <div className="readme-home-card__grid">
          <div className="readme-home-card__main">
            <p className="code-comment">// SYSTEM BOOT: JULIAN_GAITAN</p>

            <div className="readme-home-card__identity">
              <p className="readme-home-card__eyebrow">Backend / Full-Stack Developer</p>
              <h1>
                <span>JULIÁN</span>
                <span className="is-accent">GAITÁN</span>
              </h1>
              <p className="readme-home-card__tagline">
                Web applications / APIs / Integrations / Software quality
              </p>
            </div>

            <div className="readme-home-card__badges" aria-label="Role badges">
              {[
                'Backend / Full-Stack Developer',
                'Node.js / TypeScript',
                'Vue.js / Node.js',
                'AI Tooling',
                'Remote-ready',
              ].map((badge) => (
                <span key={badge} className="readme-home-card__badge">
                  {badge}
                </span>
              ))}
            </div>

            <p className="readme-home-card__summary">
              {professional.intro}
            </p>

            <div className="readme-home-card__actions">
              <button className="primary-button" onClick={() => onOpen('systems')}>
                Browse Systems
              </button>
              <button className="secondary-button" onClick={() => onOpen('urban-map-bucaramanga')}>
                Open Urban Map
              </button>
              <button className="secondary-button" onClick={() => onOpen('contact')}>
                Contact
              </button>
            </div>
          </div>

          <aside className="readme-home-card__side" aria-label="Profile facts and navigation status">
            <div className="readme-home-card__facts">
              {[
                ['Location', professional.location],
                ['English', 'C1 · Self-reported'],
                ['Focus', professional.role],
                ['Status', professional.availability],
              ].map(([label, value]) => (
                <div className="readme-home-card__fact" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <button className="readme-home-card__navigator" onClick={onAskAi}>
              <span className="status-dot" />
              <div>
                <strong>AI Navigator Available</strong>
                <small>Ask about projects, stack and fit</small>
              </div>
              <span aria-hidden="true">→</span>
            </button>
          </aside>
        </div>

        <div className="readme-home-card__proof-grid" aria-label="Proof cards">
          {proofCards.map(([title, subtitle]) => (
            <article className="readme-home-card__proof-card" key={title}>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured systems</p>
            <h2>Web applications, backend systems and XR</h2>
          </div>
          <span className="section-index">
            {String(featuredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpen} compact />
          ))}
        </div>
      </section>
    </div></Localized>;
}
