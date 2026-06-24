interface ActivityRailProps {
  explorerOpen: boolean;
  aiOpen: boolean;
  onExplorer: () => void;
  onAi: () => void;
  onContact: () => void;
}

export function ActivityRail({
  explorerOpen,
  aiOpen,
  onExplorer,
  onAi,
  onContact,
}: ActivityRailProps) {
  return (
    <nav className="activity-rail" aria-label="Workspace tools">
      <div>
        <button className={explorerOpen ? 'active' : ''} onClick={onExplorer} aria-label="Explorer">
          ◫
        </button>
        <button aria-label="Search">⌕</button>
        <button aria-label="Architecture">⑂</button>
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
