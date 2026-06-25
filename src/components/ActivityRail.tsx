interface ActivityRailProps {
  explorerOpen: boolean;
  aiOpen: boolean;
  onExplorer: () => void;
  onSearch: () => void;
  onArchitecture: () => void;
  onAi: () => void;
  onContact: () => void;
}

export function ActivityRail({
  explorerOpen,
  aiOpen,
  onExplorer,
  onSearch,
  onArchitecture,
  onAi,
  onContact,
}: ActivityRailProps) {
  return (
    <nav className="activity-rail" aria-label="Workspace tools">
      <div>
        <button className={explorerOpen ? 'active' : ''} onClick={onExplorer} aria-label="Explorer">
          ◫
        </button>
        <button onClick={onSearch} aria-label="Search files">⌕</button>
        <button onClick={onArchitecture} aria-label="Open architecture diagrams">⑂</button>
        <button className={aiOpen ? 'active' : ''} onClick={onAi} aria-label="AI Navigator">
          ✦
        </button>
      </div>
      <button onClick={onContact} aria-label="Contact">
        @
      </button>
    </nav>
  );
}
