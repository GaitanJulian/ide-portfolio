import { Localized } from './i18n/Language';
import { useEffect, useRef, useState } from 'react';
import { ActivityRail } from './components/ActivityRail';
import { AiNavigator } from './components/AiNavigator';
import { CommandPalette } from './components/CommandPalette';
import { CyberpunkBackground } from './components/CyberpunkBackground';
import { EditorTabs } from './components/EditorTabs';
import { FileExplorer } from './components/FileExplorer';
import { StatusBar } from './components/StatusBar';
import { TerminalPanelNext } from './components/TerminalPanelNext';
import { TopBar } from './components/TopBar';
import { filesById, labFileIds } from './data/fileRegistry';
import { useWorkspace } from './hooks/useWorkspace';
import type { LabState } from './types';
import { ReadmeView } from './views/ReadmeView';
import { SystemsViewNext } from './views/StructuredViewsNext';

export default function App() {
  const workspace = useWorkspace();
  const [labState, setLabState] = useState<LabState>(() => {
    const unlocked = window.localStorage.getItem('portfolio.labUnlocked') === 'true';
    return { unlocked, challengePassed: unlocked };
  });
  const [labJustUnlocked, setLabJustUnlocked] = useState(false);
  const previousLabUnlockedRef = useRef(labState.unlocked);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 760);
  const [explorerOpen, setExplorerOpen] = useState(() => window.innerWidth >= 760);
  const [aiOpen, setAiOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<'explorer' | 'terminal' | 'ai' | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('portfolio.labUnlocked', labState.unlocked ? 'true' : 'false');
  }, [labState.unlocked]);

  useEffect(() => {
    if (!labState.unlocked || previousLabUnlockedRef.current === labState.unlocked) return;
    setLabJustUnlocked(true);
    const timeoutId = window.setTimeout(() => setLabJustUnlocked(false), 1800);
    previousLabUnlockedRef.current = labState.unlocked;
    return () => window.clearTimeout(timeoutId);
  }, [labState.unlocked]);

  useEffect(() => {
    if (previousLabUnlockedRef.current !== labState.unlocked) {
      previousLabUnlockedRef.current = labState.unlocked;
    }
  }, [labState.unlocked]);

  useEffect(() => {
    if (labState.unlocked) return;
    const nextOpenFiles = workspace.openFiles.filter((fileId) => !labFileIds.includes(fileId));
    if (nextOpenFiles.length === workspace.openFiles.length) return;
    workspace.setOpenFiles(nextOpenFiles.length ? nextOpenFiles : []);
    if (labFileIds.includes(workspace.activeFileId)) {
      workspace.setActiveFileId('readme');
    }
  }, [labState.unlocked, workspace.activeFileId, workspace.openFiles, workspace.setActiveFileId, workspace.setOpenFiles]);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 760;
      setIsMobile(mobile);
      if (mobile) {
        setActiveOverlay(null);
      } else {
        setExplorerOpen((current) => current || window.innerWidth >= 1100);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen(true);
      } else if (event.key === 'Escape') {
        setPaletteOpen(false);
        if (isMobile) setActiveOverlay(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || activeOverlay === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeOverlay, isMobile]);

  const openFile = (fileId: string) => {
    if (!labState.unlocked && labFileIds.includes(fileId)) {
      return;
    }
    workspace.openFile(fileId);
    if (isMobile) setActiveOverlay(null);
  };

  const toggleOverlay = (overlay: 'explorer' | 'terminal' | 'ai') => {
    if (isMobile) {
      setActiveOverlay((current) => (current === overlay ? null : overlay));
      return;
    }
    if (overlay === 'explorer') setExplorerOpen((value) => !value);
    if (overlay === 'terminal') setTerminalOpen((value) => !value);
    if (overlay === 'ai') setAiOpen((value) => !value);
  };

  const activeFile = filesById[workspace.activeFileId];
  const renderActiveFile = () => {
    if (workspace.activeFileId === 'readme') {
      return <ReadmeView onOpen={openFile} onAskAi={() => toggleOverlay('ai')} />;
    }
    if (workspace.activeFileId === 'systems') {
      return <SystemsViewNext onOpen={openFile} />;
    }
    return activeFile.render();
  };

  return <Localized><div className="workspace-shell">
      <CyberpunkBackground />
      <TopBar
        activeFileTitle={activeFile.filename}
        onOpenPalette={() => setPaletteOpen(true)}
        onToggleExplorer={() => toggleOverlay('explorer')}
        onToggleTerminal={() => toggleOverlay('terminal')}
        onToggleAi={() => toggleOverlay('ai')}
      />
      <div className="workspace-body">
        <ActivityRail
          explorerOpen={explorerOpen}
          aiOpen={aiOpen}
          onExplorer={() => toggleOverlay('explorer')}
          onSearch={() => setPaletteOpen(true)}
          onAi={() => toggleOverlay('ai')}
          onContact={() => openFile('contact')}
        />
        <FileExplorer
          activeFileId={workspace.activeFileId}
          onOpen={openFile}
          open={isMobile ? activeOverlay === 'explorer' : explorerOpen}
          labUnlocked={labState.unlocked}
          labJustUnlocked={labJustUnlocked}
        />
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
          <div className="editor-pane" id={`editor-panel-${workspace.activeFileId}`} role="tabpanel">
            {renderActiveFile()}
          </div>
          <TerminalPanelNext
            open={isMobile ? activeOverlay === 'terminal' : terminalOpen}
            onToggle={() => toggleOverlay('terminal')}
            onOpenFile={openFile}
            labState={labState}
            onLabStateChange={setLabState}
          />
        </main>
        <AiNavigator
          open={isMobile ? activeOverlay === 'ai' : aiOpen}
          onClose={() => (isMobile ? setActiveOverlay(null) : setAiOpen(false))}
          onOpenFile={openFile}
        />
        {isMobile && activeOverlay && (
          <button className="mobile-scrim" onClick={() => setActiveOverlay(null)} aria-label="Close active panel" />
        )}
      </div>
      <StatusBar activeFileId={workspace.activeFileId} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onOpenFile={openFile} labUnlocked={labState.unlocked} />
    </div></Localized>;
}
