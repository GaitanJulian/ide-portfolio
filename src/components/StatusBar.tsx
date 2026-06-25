import { filesById } from '../data/fileRegistry';

export function StatusBar({ activeFileId }: { activeFileId: string }) {
  const file = filesById[activeFileId];
  return (
    <footer className="status-bar">
      <div>
        <span>portfolio workspace</span>
        <span>local content</span>
      </div>
      <div>
        <span>{file.kind.toUpperCase()}</span>
        <span>{file.category}</span>
        <span className="status-ready">● REMOTE-READY</span>
      </div>
    </footer>
  );
}
