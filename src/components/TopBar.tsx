interface TopBarProps {
  activeFileTitle: string;
  onOpenPalette: () => void;
  onToggleExplorer: () => void;
  onToggleTerminal: () => void;
  onToggleAi: () => void;
}

export function TopBar({
  activeFileTitle,
  onOpenPalette,
  onToggleExplorer,
  onToggleTerminal,
  onToggleAi,
}: TopBarProps) {
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
      <button className="command-center" onClick={onOpenPalette} aria-label="Open command palette">
        <span>⌕</span>
        <span>portfolio / backend-workspace</span>
        <kbd>Ctrl K</kbd>
      </button>
      <strong className="mobile-active-file">{activeFileTitle}</strong>
      <button className="mobile-tool" onClick={onToggleTerminal} aria-label="Toggle terminal">
        &gt;_
      </button>
      <button className="top-bar__ai" onClick={onToggleAi}>
        <span className="status-dot" />
        AI Navigator
      </button>
    </header>
  );
}
