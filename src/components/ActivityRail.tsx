import { Localized } from '../i18n/Language';
interface ActivityRailProps {
  explorerOpen: boolean;
  aiOpen: boolean;
  onExplorer: () => void;
  onSearch: () => void;
  onAi: () => void;
  onContact: () => void;
}

export function ActivityRail({ explorerOpen, aiOpen, onExplorer, onSearch, onAi, onContact }: ActivityRailProps) {
  return <Localized><nav className="activity-rail" aria-label="Workspace tools">
      <div>
        <button className={explorerOpen ? 'active' : ''} onClick={onExplorer} aria-label="Explorer">
          EX
        </button>
        <button onClick={onSearch} aria-label="Search files">
          SR
        </button>
        <button className={aiOpen ? 'active' : ''} onClick={onAi} aria-label="AI Navigator">
          AI
        </button>
      </div>
      <button onClick={onContact} aria-label="Contact">
        @
      </button>
    </nav></Localized>;
}
