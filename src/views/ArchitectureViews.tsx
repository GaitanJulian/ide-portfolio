import { Localized } from '../i18n/Language';
export function DecisionsView() {
  const decisions = [
    ['ADR-001', 'Prefer explicit service boundaries', 'Separate responsibilities when they carry different failure modes.'],
    ['ADR-002', 'Model state transitions', 'Use named states and permitted transitions for workflows that cannot be ambiguous.'],
    ['ADR-003', 'Validate at boundaries', 'Treat external payloads and user input as untrusted until validated.'],
    ['ADR-004', 'Keep local AI optional', 'Local tooling should degrade gracefully and never block the core product.'],
  ];

  return <Localized><div className="document structured-view">
      <p className="code-comment">[architecture/decisions.log]</p>
      <div className="decision-list">
        {decisions.map(([id, title, description]) => (
          <article key={id}>
            <span>{id} · ACCEPTED</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div></Localized>;
}

export function DiagramsView() {
  return <Localized><div className="document structured-view">
      <p className="code-comment"># architecture/diagrams.md</p>
      <h1>System interaction previews</h1>
      <div className="diagram-board">
        <div className="diagram-column">
          <span>CLIENTS</span>
          <strong>Web UI</strong>
          <strong>Automation</strong>
        </div>
        <i>→</i>
        <div className="diagram-column diagram-column--accent">
          <span>BOUNDARY</span>
          <strong>API layer</strong>
          <strong>Auth + validation</strong>
        </div>
        <i>→</i>
        <div className="diagram-column">
          <span>SERVICES</span>
          <strong>Business logic</strong>
          <strong>Background work</strong>
        </div>
        <i>→</i>
        <div className="diagram-column">
          <span>DATA</span>
          <strong>PostgreSQL</strong>
          <strong>Audit context</strong>
        </div>
      </div>
      <p className="diagram-caption">
        A reusable view of the boundaries shared across the documented backend systems.
      </p>
    </div></Localized>;
}

export function ReliabilityView() {
  const areas = [
    ['Testing', 'Service-level tests, API behavior checks and failure-path coverage.'],
    ['Error handling', 'Typed errors, useful responses and controlled recovery paths.'],
    ['Security', 'Input validation, authentication boundaries and secret-safe configuration.'],
    ['Maintainability', 'Small modules, explicit contracts and documented technical decisions.'],
  ];

  return <Localized><div className="document structured-view">
      <p className="code-comment"># architecture/reliability.md</p>
      <h1>Reliability is a design constraint</h1>
      <div className="reliability-grid">
        {areas.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div></Localized>;
}
