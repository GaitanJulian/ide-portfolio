import { Localized } from '../i18n/Language';
import { useEffect, useRef, useState } from 'react';
import { filesById } from '../data/fileRegistry';

interface EditorTabsProps {
  openFiles: string[];
  activeFileId: string;
  onActivate: (fileId: string) => void;
  onClose: (fileId: string) => void;
}

export function EditorTabs({ openFiles, activeFileId, onActivate, onClose }: EditorTabsProps) {
  const tabsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const previousOpenFilesRef = useRef<string[]>(openFiles);
  const [closingTabs, setClosingTabs] = useState<string[]>([]);
  const [enteringTabs, setEnteringTabs] = useState<string[]>([]);

  useEffect(() => {
    tabsRef.current[activeFileId]?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  }, [activeFileId, openFiles]);

  useEffect(() => {
    const previous = previousOpenFilesRef.current;
    const added = openFiles.filter((fileId) => !previous.includes(fileId));
    previousOpenFilesRef.current = openFiles;
    if (!added.length) return;

    setEnteringTabs((current) => [...new Set([...current, ...added])]);
    const timeoutId = window.setTimeout(() => {
      setEnteringTabs((current) => current.filter((fileId) => !added.includes(fileId)));
    }, 180);

    return () => window.clearTimeout(timeoutId);
  }, [openFiles]);

  const requestClose = (fileId: string) => {
    if (closingTabs.includes(fileId)) return;
    setClosingTabs((current) => [...current, fileId]);
    window.setTimeout(() => {
      setClosingTabs((current) => current.filter((id) => id !== fileId));
      onClose(fileId);
    }, 160);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'w' && openFiles.length > 0) {
        event.preventDefault();
        requestClose(activeFileId);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeFileId, openFiles.length]);

  return <Localized><div
      className="editor-tabs"
      role="tablist"
      aria-label="Open files"
      onKeyDown={(event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const current = openFiles.indexOf(activeFileId);
        const delta = event.key === 'ArrowRight' ? 1 : -1;
        onActivate(openFiles[(current + delta + openFiles.length) % openFiles.length]);
      }}
    >
      {openFiles.map((fileId) => {
        const entry = filesById[fileId];
        const active = fileId === activeFileId;
        const icon = entry.kind === 'markdown' ? 'M->' : entry.kind.slice(0, 2).toUpperCase();
        return (
          <div
            className={`editor-tab ${active ? 'active' : ''} ${enteringTabs.includes(fileId) ? 'is-entering' : ''} ${closingTabs.includes(fileId) ? 'is-closing' : ''}`}
            key={fileId}
            ref={(node) => {
              tabsRef.current[fileId] = node;
            }}
          >
            <button
              className="editor-tab__trigger"
              role="tab"
              aria-selected={active}
              aria-controls={`editor-panel-${fileId}`}
              tabIndex={active ? 0 : -1}
              onClick={() => onActivate(fileId)}
              title={entry.filename}
            >
              <span className="editor-tab__icon" aria-hidden="true">
                {icon}
              </span>
              <span className="editor-tab__filename">{entry.filename}</span>
            </button>
            <button className="tab-close" onClick={() => requestClose(fileId)} aria-label={`Close ${entry.filename}`} title={`Close ${entry.filename}`}>
              x
            </button>
          </div>
        );
      })}
    </div></Localized>;
}
