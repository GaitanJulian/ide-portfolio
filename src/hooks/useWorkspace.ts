import { useCallback, useState } from 'react';
import { filesById } from '../data/fileRegistry';

export function useWorkspace() {
  const [openFiles, setOpenFiles] = useState<string[]>(['readme']);
  const [activeFileId, setActiveFileId] = useState('readme');

  const openFile = useCallback((fileId: string) => {
    if (!filesById[fileId]) return;
    setOpenFiles((current) => (current.includes(fileId) ? current : [...current, fileId]));
    setActiveFileId(fileId);
  }, []);

  const closeFile = useCallback(
    (fileId: string) => {
      setOpenFiles((current) => {
        if (current.length === 1) return current;
        const closingIndex = current.indexOf(fileId);
        const next = current.filter((id) => id !== fileId);

        if (activeFileId === fileId) {
          setActiveFileId(next[Math.max(0, closingIndex - 1)] ?? next[0]);
        }
        return next;
      });
    },
    [activeFileId],
  );

  return {
    openFiles,
    activeFileId,
    openFile,
    closeFile,
    setActiveFileId,
  };
}
