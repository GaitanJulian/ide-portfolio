import type { Project } from '../types';

const paymentDecisions = [
  ['Service separation', 'Order and payment responsibilities stay independently testable and evolvable.'],
  ['Webhook verification', 'Incoming provider events are authenticated before state changes are accepted.'],
  ['Order state machine', 'Explicit transitions prevent ambiguous payment and fulfillment states.'],
  ['Retry handling', 'Recoverable failures follow controlled retry paths instead of hidden repetition.'],
  ['Authentication', 'Access and refresh token flows keep protected operations bounded.'],
  ['Testing strategy', 'Service, route and transition behavior are verified at the appropriate boundary.'],
];

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const isPaymentFlow = project.id === 'paymentflow';

  return (
    <article className="document project-detail">
      <header className="project-hero">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="project-hero__meta">
          <span>CASE STUDY</span>
          <strong>{project.id.toUpperCase()}</strong>
        </div>
      </header>

      <div className="tag-list tag-list--large">
        {project.stack.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      <section className="project-record" aria-label="Project context">
        {[
          ['Context', project.context],
          ['Status', project.status],
          ['Role', project.role],
          ['Evidence', project.evidence],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </section>

      {project.links?.length ? (
        <section className="project-section">
          <p className="eyebrow">Resources</p>
          <h2>Verified links</h2>
          <div className="tag-list tag-list--large">
            {project.links.map((link) => (
              <a className="tag" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="project-section">
        <p className="eyebrow">Overview</p>
        <h2>What this system explores</h2>
        <p>
          {project.description} The implementation emphasizes clear boundaries, inspectable behavior
          and a structure that can be tested without relying on presentation-layer assumptions.
        </p>
      </section>

      {isPaymentFlow ? (
        <>
          <section className="project-section">
            <p className="eyebrow">Architecture</p>
            <h2>Payment and order lifecycle</h2>
            <div className="architecture-flow" aria-label="PaymentFlow architecture">
              {['Auth module', 'Order service', 'Payment service', 'Webhook handler', 'PostgreSQL'].map(
                (node, index, nodes) => (
                  <div className="architecture-flow__item" key={node}>
                    <div className="architecture-node">
                      <span>0{index + 1}</span>
                      <strong>{node}</strong>
                    </div>
                    {index < nodes.length - 1 && <i aria-hidden="true">-&gt;</i>}
                  </div>
                ),
              )}
            </div>
            <div className="retry-lane">
              <span>retry flow</span>
              <div />
              <code>FAILED -&gt; retry policy -&gt; provider request</code>
            </div>
          </section>
          <section className="project-section">
            <p className="eyebrow">Technical decisions</p>
            <h2>Designed for explicit behavior</h2>
            <div className="decision-grid">
              {paymentDecisions.map(([title, description], index) => (
                <div className="decision-card" key={title}>
                  <span>ADR-{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="project-section">
          <p className="eyebrow">System focus</p>
          <h2>Core technical areas</h2>
          <div className="focus-grid">
            {project.focus.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="project-section project-decisions">
        <div>
          <p className="eyebrow">Decisions &amp; trade-offs</p>
          <h2>Documented technical posture</h2>
          <p>{project.tradeoffs}</p>
        </div>
        <ul>
          {project.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </section>

      <section className="project-section quality-section">
        <div>
          <p className="eyebrow">Testing &amp; quality</p>
          <h2>Engineering posture</h2>
        </div>
        <p>{project.testing}</p>
      </section>
    </article>
  );
}
