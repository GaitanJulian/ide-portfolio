import { useEffect, useRef, useState } from 'react';
import { fileRegistry, filesById } from '../data/fileRegistry';
import { projects } from '../data/projects';
import type { TerminalLine } from '../types';

const aliases: Record<string, string> = {
  paymentflow: 'paymentflow',
  urban: 'urban-map-bucaramanga',
  'urban-map': 'urban-map-bucaramanga',
  'urban-map-bucaramanga': 'urban-map-bucaramanga',
  logistics: 'logistics',
  statusboard: 'statusboard',
  incidenthub: 'incidenthub',
  docuflow: 'docuflow',
  gameinsider: 'gameinsider',
  'xr-thesis': 'xr-thesis',
  systems: 'systems',
  projects: 'systems',
  'systems/index': 'systems',
  'systems/index.md': 'systems',
  'README.md': 'readme',
  'profile.yaml': 'profile',
  'experience.log': 'experience',
  'capabilities.json': 'capabilities',
};

interface TerminalPanelProps {
  open: boolean;
  onToggle: () => void;
  onOpenFile: (fileId: string) => void;
}

export function TerminalPanel({ open, onToggle, onOpenFile }: TerminalPanelProps) {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 1, kind: 'output', text: 'Portfolio terminal ready. Type "help" for available commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const output = (text: string, kind: TerminalLine['kind'] = 'output') => {
    setLines((current) => [...current, { id: Date.now() + current.length, kind, text }]);
  };

  const execute = (raw: string) => {
    const command = raw.trim();
    if (!command) return;
    setLines((current) => [...current, { id: Date.now(), kind: 'command', text: command }]);
    setHistory((current) => [...current, command]);
    setHistoryIndex(-1);

    const [verb, ...args] = command.split(/\s+/);
    const target = args.join(' ');

    if (verb === 'clear') {
      setLines([]);
      return;
    }
    if (verb === 'help') {
      output('help · pwd · ls · cat <file> · open <file|project> · projects · stack · experience · contact · resume · lab · clear');
    } else if (verb === 'pwd') {
      output('/home/julian/portfolio');
    } else if (verb === 'ls') {
      output('README.md  profile.yaml  experience.log  capabilities.json  systems/  architecture/  lab/  contact.sh  resume.pdf');
    } else if (verb === 'cat') {
      const fileId = aliases[target] ?? fileRegistry.find((file) => file.filename === target)?.id;
      if (fileId === 'readme') {
        output(
          'Julian Gaitan - Backend Engineer, Colombia, remote-ready.\nFocus: reliable backend services, data workflows and production-minded systems.\nFeatured: PaymentFlow, Urban Map Bucaramanga, IncidentHub, DocuFlow and Logistics Data Pipeline.\nUse "open systems" to browse every documented project.',
        );
      } else {
        output(fileId ? filesById[fileId].summary : `cat: ${target || '<file>'}: file not found`, fileId ? 'output' : 'error');
      }
    } else if (verb === 'open') {
      const fileId = aliases[target] ?? fileRegistry.find((file) => file.filename === target)?.id;
      if (fileId) {
        onOpenFile(fileId);
        output(`opened ${filesById[fileId].path}`);
      } else {
        output(`open: ${target || '<file>'}: not found. Try "projects" or "ls".`, 'error');
      }
    } else if (verb === 'projects') {
      output(`${projects.map((project) => project.id).join(' · ')} · systems/index\nUse "open systems" to browse the Project Database.`);
    } else if (verb === 'stack') {
      onOpenFile('capabilities');
      output('Backend · Databases · DevOps · Testing · AI Tooling · Creative Tech');
    } else if (verb === 'experience') {
      onOpenFile('experience');
      output('opened ~/portfolio/experience.log');
    } else if (verb === 'contact') {
      onOpenFile('contact');
      output('executed ./contact.sh');
    } else if (verb === 'resume') {
      onOpenFile('resume');
      output('resume.pdf not attached yet');
    } else if (verb === 'lab') {
      onOpenFile('unity-experiments');
      output('opened ~/portfolio/lab/unity-experiments.md');
    } else {
      const suggestion = ['help', 'open', 'projects', 'stack'].find((item) => item.startsWith(verb[0] ?? ''));
      output(`command not found: ${verb}.${suggestion ? ` Did you mean "${suggestion}"?` : ''} Type "help".`, 'error');
    }
  };

  return (
    <section className={`terminal-panel ${open ? 'open' : 'collapsed'}`}>
      <header
        className="terminal-panel__toggle"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="terminal-console-panel"
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="terminal-tab active">TERMINAL</span>
        <span>local · deterministic</span>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
          aria-label={open ? 'Collapse terminal' : 'Expand terminal'}
        >
          {open ? '⌄' : '⌃'}
        </button>
      </header>
      {open && (
        <div className="terminal-console" ref={scrollRef} id="terminal-console-panel">
          {lines.map((line) => (
            <div className={`terminal-line terminal-line--${line.kind}`} key={line.id}>
              {line.kind === 'command' && <span>julian@portfolio:~$ </span>}
              {line.text}
            </div>
          ))}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              execute(input);
              setInput('');
            }}
          >
            <label htmlFor="terminal-input">julian@portfolio:~$</label>
            <input
              id="terminal-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoComplete="off"
              spellCheck={false}
              onKeyDown={(event) => {
                if (event.ctrlKey && event.key.toLowerCase() === 'l') {
                  event.preventDefault();
                  setLines([]);
                } else if (event.key === 'ArrowUp' && history.length) {
                  event.preventDefault();
                  const next = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
                  setHistoryIndex(next);
                  setInput(history[history.length - 1 - next] ?? '');
                } else if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  const next = Math.max(-1, historyIndex - 1);
                  setHistoryIndex(next);
                  setInput(next === -1 ? '' : history[history.length - 1 - next] ?? '');
                }
              }}
            />
            <span className={`terminal-cursor ${isFocused ? 'is-active' : ''}`} aria-hidden="true" />
            <button type="submit" aria-label="Run terminal command">
              ↵
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
