import { useEffect, useState } from 'react';
import { ActivityRail } from './components/ActivityRail';
import { AiNavigator } from './components/AiNavigator';
import { CyberpunkBackground } from './components/CyberpunkBackground';
import { EditorTabs } from './components/EditorTabs';
import { FileExplorer } from './components/FileExplorer';
import { StatusBar } from './components/StatusBar';
import { TerminalPanel } from './components/TerminalPanel';
import { TopBar } from './components/TopBar';
import { filesById } from './data/fileRegistry';
import { useWorkspace } from './hooks/useWorkspace';
import { ReadmeView } from './views/ReadmeView';
import { SystemsView } from './views/StructuredViews';

export default function App() {
  const workspace = useWorkspace();
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 760) {
        setExplorerOpen(false);
        setAiOpen(false);
        setTerminalOpen(false);
      } else if (window.innerWidth < 1180) {
        setAiOpen(false);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openFile = (fileId: string) => {
    workspace.openFile(fileId);
    if (window.innerWidth < 760) setExplorerOpen(false);
  };

  const activeFile = filesById[workspace.activeFileId];
  const renderActiveFile = () => {
    if (workspace.activeFileId === 'readme') {
      return <ReadmeView onOpen={openFile} onAskAi={() => setAiOpen(true)} />;
    }
    if (workspace.activeFileId === 'systems') {
      return <SystemsView onOpen={openFile} />;
    }
    return activeFile.render();
  };

  return (
    <div className="workspace-shell">
      <CyberpunkBackground />
      <TopBar
        onToggleExplorer={() => setExplorerOpen((value) => !value)}
        onToggleAi={() => setAiOpen((value) => !value)}
      />
      <div className="workspace-body">
        <ActivityRail
          explorerOpen={explorerOpen}
          aiOpen={aiOpen}
          onExplorer={() => setExplorerOpen((value) => !value)}
          onAi={() => setAiOpen((value) => !value)}
          onContact={() => openFile('contact')}
        />
        <FileExplorer activeFileId={workspace.activeFileId} onOpen={openFile} open={explorerOpen} />
        <main className="editor-workspace">
          <EditorTabs
            openFiles={workspace.openFiles}
            activeFileId={workspace.activeFileId}
            onActivate={workspace.setActiveFileId}
            onClose={workspace.closeFile}
          />
          <div className="breadcrumb">
            <span>portfolio</span>
            <i>›</i>
            <span>{activeFile.category}</span>
            <i>›</i>
            <strong>{activeFile.filename}</strong>
          </div>
          <div className="editor-pane">{renderActiveFile()}</div>
          <TerminalPanel
            open={terminalOpen}
            onToggle={() => setTerminalOpen((value) => !value)}
            onOpenFile={openFile}
          />
        </main>
        <AiNavigator open={aiOpen} onClose={() => setAiOpen(false)} onOpenFile={openFile} />
      </div>
      <StatusBar activeFileId={workspace.activeFileId} />
      {explorerOpen && <button className="mobile-scrim" onClick={() => setExplorerOpen(false)} aria-label="Close explorer" />}
    </div>
  );
}
