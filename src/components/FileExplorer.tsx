import { useState } from 'react';
import { fileRegistry } from '../data/fileRegistry';
import type { FileCategory, FileKind } from '../types';

const icons: Record<FileKind, string> = {
  markdown: 'M↓',
  yaml: 'Y',
  log: 'L',
  json: '{}',
  shell: '$_',
  unity: 'U',
  pdf: 'P',
};

const groups: { id: FileCategory; label: string }[] = [
  { id: 'systems', label: 'systems' },
  { id: 'architecture', label: 'architecture' },
  { id: 'lab', label: 'lab' },
];

interface FileExplorerProps {
  activeFileId: string;
  onOpen: (fileId: string) => void;
  open: boolean;
}

export function FileExplorer({ activeFileId, onOpen, open }: FileExplorerProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    systems: true,
    architecture: true,
    lab: false,
  });

  if (!open) return null;

  const renderFile = (fileId: string) => {
    const entry = fileRegistry.find((item) => item.id === fileId);
    if (!entry) return null;
    return (
      <button
        className={`explorer-file ${activeFileId === entry.id ? 'active' : ''}`}
        onClick={() => onOpen(entry.id)}
        key={entry.id}
        title={entry.path}
      >
        <span className={`file-icon file-icon--${entry.kind}`}>{icons[entry.kind]}</span>
        <span>{entry.filename}</span>
      </button>
    );
  };

  return (
    <aside className="file-explorer">
      <div className="panel-heading">
        <span>EXPLORER</span>
        <button aria-label="More explorer actions">•••</button>
      </div>
      <button className="workspace-root">
        <span>⌄</span> PORTFOLIO
      </button>
      <div className="explorer-tree">
        {['readme', 'profile', 'experience', 'capabilities'].map(renderFile)}
        {groups.map((group) => (
          <div className="explorer-group" key={group.id}>
            <button
              className="folder-row"
              onClick={() => setExpanded((current) => ({ ...current, [group.id]: !current[group.id] }))}
            >
              <span>{expanded[group.id] ? '⌄' : '›'}</span>
              <span className="folder-icon">◇</span>
              {group.label}
            </button>
            {expanded[group.id] && (
              <div className="folder-children">
                {fileRegistry
                  .filter((entry) => entry.category === group.id && entry.id !== 'systems')
                  .map((entry) => renderFile(entry.id))}
              </div>
            )}
          </div>
        ))}
        {['contact', 'resume'].map(renderFile)}
      </div>
      <button className="explorer-ai-card" onClick={() => onOpen('paymentflow')}>
        <span className="status-dot" />
        <span>
          <strong>Strongest case study</strong>
          PaymentFlow
        </span>
        <span>↗</span>
      </button>
    </aside>
  );
}
