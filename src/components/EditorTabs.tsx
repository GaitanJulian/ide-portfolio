import { filesById } from '../data/fileRegistry';

interface EditorTabsProps {
  openFiles: string[];
  activeFileId: string;
  onActivate: (fileId: string) => void;
  onClose: (fileId: string) => void;
}

export function EditorTabs({ openFiles, activeFileId, onActivate, onClose }: EditorTabsProps) {
  return (
    <div className="editor-tabs" role="tablist" aria-label="Open files">
      {openFiles.map((fileId) => {
        const entry = filesById[fileId];
        const active = fileId === activeFileId;
        return (
          <div className={`editor-tab ${active ? 'active' : ''}`} key={fileId}>
            <button role="tab" aria-selected={active} onClick={() => onActivate(fileId)}>
              <span>{entry.kind === 'markdown' ? 'M↓' : entry.kind.slice(0, 2).toUpperCase()}</span>
              {entry.filename}
            </button>
            <button className="tab-close" onClick={() => onClose(fileId)} aria-label={`Close ${entry.filename}`}>
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
