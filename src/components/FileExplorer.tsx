import { useState } from 'react';
import { visibleFileRegistry } from '../data/fileRegistry';
import type { FileCategory, FileKind } from '../types';

const icons: Record<FileKind, string> = {
  markdown: 'M->',
  yaml: 'Y',
  log: 'L',
  json: '{}',
  shell: '$_',
  unity: 'U',
  pdf: 'P',
};

const groups: { id: FileCategory; label: string }[] = [
  { id: 'systems', label: 'systems' },
  { id: 'lab', label: 'lab' },
];

interface FileExplorerProps {
  activeFileId: string;
  onOpen: (fileId: string) => void;
  open: boolean;
  labUnlocked: boolean;
  labJustUnlocked: boolean;
}

export function FileExplorer({ activeFileId, onOpen, open, labUnlocked, labJustUnlocked }: FileExplorerProps) {
  const [rootExpanded, setRootExpanded] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    systems: true,
    lab: false,
  });

  const renderFile = (fileId: string) => {
    const entry = visibleFileRegistry.find((item) => item.id === fileId);
    if (!entry) return null;
    return (
      <button
        className={`explorer-file ${activeFileId === entry.id ? 'active' : ''}`}
        onClick={() => onOpen(entry.id)}
        key={entry.id}
        title={entry.path}
      >
        <span className={`file-icon file-icon--${entry.kind}`}>{icons[entry.kind]}</span>
        <span className="explorer-file__name">{entry.filename}</span>
      </button>
    );
  };

  return (
    <aside className={`file-explorer ${open ? 'is-open' : 'is-closed'}`} aria-hidden={!open}>
      <div className="panel-heading">
        <span>EXPLORER</span>
      </div>
      <button
        className="workspace-root"
        onClick={() => setRootExpanded((current) => !current)}
        aria-expanded={rootExpanded}
        aria-controls="explorer-root-children"
      >
        <span>{rootExpanded ? 'v' : '>'}</span> PORTFOLIO
      </button>
      <div className="explorer-tree" id="explorer-root-children">
        {rootExpanded && (
          <>
            {['readme', 'profile', 'experience', 'capabilities'].map(renderFile)}
            {groups.filter((group) => group.id !== 'lab' || labUnlocked).map((group) => (
              <div className="explorer-group" key={group.id}>
                <button
                  className={`folder-row ${group.id === 'lab' ? 'folder-row--lab' : ''} ${group.id === 'lab' && labJustUnlocked ? 'folder-row--lab-ping' : ''}`}
                  onClick={() => setExpanded((current) => ({ ...current, [group.id]: !current[group.id] }))}
                >
                  <span>{expanded[group.id] ? 'v' : '>'}</span>
                  <span className="folder-icon">o</span>
                  {group.label}
                </button>
                {expanded[group.id] && (
                  <div className="folder-children">
                    {visibleFileRegistry
                      .filter((entry) => entry.category === group.id)
                      .map((entry) => renderFile(entry.id))}
                  </div>
                )}
              </div>
            ))}
            {['contact', 'resume'].map(renderFile)}
          </>
        )}
      </div>
      <button className="explorer-ai-card" onClick={() => onOpen('paymentflow')}>
        <span className="status-dot" />
        <span>
          <strong>Strongest case study</strong>
          PaymentFlow
        </span>
        <span>{'->'}</span>
      </button>
    </aside>
  );
}
