import { useEffect, useMemo, useRef, useState } from 'react';
import { visibleFileRegistry } from '../data/fileRegistry';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenFile: (fileId: string) => void;
  labUnlocked: boolean;
}

export function CommandPalette({ open, onClose, onOpenFile, labUnlocked }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const ranked = normalized
        ? visibleFileRegistry.filter((file) =>
          [file.filename, file.path, file.title, file.summary, ...(file.tags ?? []), ...(file.keywords ?? [])]
            .join(' ')
            .toLowerCase()
            .includes(normalized),
        )
      : visibleFileRegistry;
    const visible = ranked.filter((file) => labUnlocked || file.category !== 'lab');
    return visible.slice(0, 9);
  }, [labUnlocked, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActiveIndex(0);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const select = (fileId: string) => {
    onOpenFile(fileId);
    onClose();
  };

  return (
    <div className="command-palette-layer" role="presentation" onMouseDown={onClose}>
      <section
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="command-palette__header">
          <div>
            <strong id="command-palette-title">Command Palette</strong>
            <small>Search files, projects and workspace views</small>
          </div>
          <button className="command-palette__close" onClick={onClose} aria-label="Close command palette">
            ×
          </button>
        </div>
        <div className="command-palette__input">
          <span aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search files, projects or actions..."
            aria-label="Search portfolio files"
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
              } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setActiveIndex((index) => Math.min(index + 1, results.length - 1));
              } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setActiveIndex((index) => Math.max(index - 1, 0));
              } else if (event.key === 'Enter' && results[activeIndex]) {
                event.preventDefault();
                select(results[activeIndex].id);
              }
            }}
          />
          <kbd>Esc</kbd>
        </div>
        <div className="command-palette__results" role="listbox">
          {results.map((file, index) => (
            <button
              key={file.id}
              className={index === activeIndex ? 'active' : ''}
              role="option"
              aria-selected={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => select(file.id)}
            >
              <span>
                <strong>{file.filename}</strong>
                <small>{file.title}</small>
              </span>
              <code>{file.path.replace('~/portfolio/', '')}</code>
            </button>
          ))}
          {!results.length && <p>No matching portfolio files.</p>}
        </div>
        <footer>
          <span>↑↓ navigate</span>
          <span>Enter open</span>
          <span>Click outside or Esc to close</span>
        </footer>
      </section>
    </div>
  );
}
