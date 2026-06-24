import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

interface ReadmeViewProps {
  onOpen: (fileId: string) => void;
  onAskAi: () => void;
}

export function ReadmeView({ onOpen, onAskAi }: ReadmeViewProps) {
  return (
    <div className="document readme-view">
      <section className="hero">
        <div className="hero__signal" aria-hidden="true">
          <span>SYS</span>
          <i />
          <span>JG-01</span>
        </div>
        <p className="code-comment">// SYSTEM://JULIAN_GAITAN / README.md</p>
        <p className="hero__kicker">Backend Engineer · Colombia · Remote-ready</p>
        <h1>
          Reliable systems,
          <span> engineered with intent.</span>
        </h1>
        <p className="hero__summary">
          I build reliable backend services, automation pipelines and technical products with clean
          architecture, strong testing and production-minded engineering.
        </p>
        <div className="hero__actions">
          <button className="primary-button" onClick={() => onOpen('paymentflow')}>
            Inspect PaymentFlow
          </button>
          <button className="secondary-button" onClick={() => onOpen('contact')}>
            Open contact.sh
          </button>
        </div>
      </section>

      <section className="fact-grid" aria-label="Profile facts">
        {[
          ['Location', 'Colombia'],
          ['English', 'C1'],
          ['Focus', 'Backend Engineering'],
          ['Status', 'Remote-ready'],
        ].map(([label, value]) => (
          <div className="fact" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured systems</p>
            <h2>Production-minded case studies</h2>
          </div>
          <span className="section-index">03 / 06</span>
        </div>
        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpen} compact />
            ))}
        </div>
      </section>

      <button className="ai-invitation" onClick={onAskAi}>
        <span className="status-dot" />
        <span>
          <strong>AI Navigator is ready.</strong> Ask about PaymentFlow or backend projects.
        </span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
