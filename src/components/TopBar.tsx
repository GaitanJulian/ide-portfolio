interface TopBarProps {
  onToggleExplorer: () => void;
  onToggleAi: () => void;
}

export function TopBar({ onToggleExplorer, onToggleAi }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="window-controls" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <button className="mobile-control" onClick={onToggleExplorer} aria-label="Toggle file explorer">
        ☰
      </button>
      <div className="top-bar__brand">
        <span className="brand-mark">JG</span>
        <span>SYSTEM://JULIAN_GAITAN</span>
      </div>
      <div className="command-center">
        <span>⌕</span>
        <span>portfolio / backend-workspace</span>
        <kbd>Ctrl K</kbd>
      </div>
      <button className="top-bar__ai" onClick={onToggleAi}>
        <span className="status-dot" />
        AI Navigator
      </button>
    </header>
  );
}
