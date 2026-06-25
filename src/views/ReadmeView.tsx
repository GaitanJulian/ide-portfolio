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
    ['English C1', 'Professional communication'],
    ['Remote-ready', 'Distributed collaboration'],
    ['Backend / Data / AI Tooling', 'Core technical focus'],
    ['AI Navigator Available', 'Portfolio context assistant'],
  ];

  return (
    <div className="document readme-view">
      <section className="readme-home-card" aria-label="Julian Gaitan home card">
        <div className="readme-home-card__grid">
          <div className="readme-home-card__main">
            <p className="code-comment">// SYSTEM BOOT: JULIAN_GAITAN</p>

            <div className="readme-home-card__identity">
              <p className="readme-home-card__eyebrow">Backend Engineer</p>
              <h1>
                <span>JULIAN</span>
                <span className="is-accent">GAITAN</span>
              </h1>
              <p className="readme-home-card__tagline">
                Scalable systems / APIs / Data workflows / AI tooling
              </p>
            </div>

            <div className="readme-home-card__badges" aria-label="Role badges">
              {[
                'Backend Engineer',
                'Node.js / TypeScript',
                'Python / Data Workflows',
                'AI Tooling',
                'Remote-ready',
              ].map((badge) => (
                <span key={badge} className="readme-home-card__badge">
                  {badge}
                </span>
              ))}
            </div>

            <p className="readme-home-card__summary">
              I build reliable backend services, automation pipelines and technical products with clean
              architecture, strong testing and production-minded engineering.
            </p>

            <div className="readme-home-card__actions">
              <button className="primary-button" onClick={() => onOpen('systems')}>
                Browse Systems
              </button>
              <button className="secondary-button" onClick={() => onOpen('paymentflow')}>
                Open PaymentFlow
              </button>
              <button className="secondary-button" onClick={() => onOpen('contact')}>
                Contact
              </button>
            </div>
          </div>

          <aside className="readme-home-card__side" aria-label="Profile facts and navigation status">
            <div className="readme-home-card__facts">
              {[
                ['Location', 'Colombia'],
                ['English', 'C1'],
                ['Focus', 'Backend Engineering'],
                ['Status', 'Remote-ready'],
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
            <h2>Case studies built with production-minded practices</h2>
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
    </div>
  );
}
