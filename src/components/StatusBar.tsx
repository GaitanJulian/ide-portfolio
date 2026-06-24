import { filesById } from '../data/fileRegistry';

export function StatusBar({ activeFileId }: { activeFileId: string }) {
  const file = filesById[activeFileId];
  return (
    <footer className="status-bar">
      <div>
        <span>⑂ main</span>
        <span>0 errors</span>
        <span>0 warnings</span>
      </div>
      <div>
        <span>{file.kind.toUpperCase()}</span>
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
        <span className="status-ready">● READY</span>
      </div>
    </footer>
  );
}
