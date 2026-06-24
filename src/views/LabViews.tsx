export function UnityExperimentsView() {
  return (
    <div className="document structured-view lab-view">
      <p className="code-comment"># lab/unity-experiments.md</p>
      <h1>Creative technology, kept in context.</h1>
      <p>
        Unity work is a secondary technical exploration: interaction systems, spatial interfaces and
        mixed-reality prototyping. The primary professional focus remains backend engineering.
      </p>
    </div>
  );
}

export function UnityLauncherView() {
  return (
    <div className="document structured-view launcher-view">
      <span className="launcher-view__badge">OPTIONAL MODULE</span>
      <h1>interactive-portfolio.unity</h1>
      <p>
        A future Unity WebGL experience can be launched from here without loading a large runtime
        during the main portfolio session.
      </p>
      <div className="warning-box">
        <strong>Runtime not attached</strong>
        <span>The workspace remains fully functional without the optional demo.</span>
      </div>
      <div className="hero__actions">
        <button className="primary-button" disabled>
          Launch demo
        </button>
        <button className="secondary-button" disabled>
          View archive
        </button>
      </div>
    </div>
  );
}

export function GamePrototypesView() {
  return (
    <div className="document structured-view lab-view">
      <p className="code-comment"># lab/game-prototypes.md</p>
      <h1>Prototype archive</h1>
      <p>
        Small experiments in gameplay logic and interactive systems. These are exploratory artifacts,
        not the main body of backend case studies.
      </p>
    </div>
  );
}
