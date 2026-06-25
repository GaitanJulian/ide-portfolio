import { useState } from 'react';
import { queryPortfolioContext } from '../services/aiNavigator';
import type { AiResponse } from '../types';

const suggestions = [
  'Summarize PaymentFlow',
  'Show backend projects',
  'What projects use PostgreSQL?',
  'Is Julian a fit for Node.js backend roles?',
  "Explain Julian's AI tooling experience",
];

interface AiNavigatorProps {
  open: boolean;
  onClose: () => void;
  onOpenFile: (fileId: string) => void;
}

export function AiNavigator({ open, onClose, onOpenFile }: AiNavigatorProps) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AiResponse | null>(null);
  const action = response?.action;

  const ask = (value: string) => {
    if (!value.trim()) return;
    setQuery(value);
    setResponse(queryPortfolioContext(value));
  };

  return (
    <aside className={`ai-navigator ${open ? 'is-open' : 'is-closed'}`} aria-hidden={!open}>
      <header>
        <div>
          <span className="status-dot" />
          <div>
            <strong>AI Navigator</strong>
            <small>AI_NAVIGATOR: READY</small>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close AI Navigator">
          ×
        </button>
      </header>
      <div className="ai-navigator__body">
        <div className="ai-orb" aria-hidden="true">
          <i />
          <span>JG</span>
        </div>
        <p className="ai-intro">
          Ask questions about Julian&apos;s projects, stack and experience. This assistant only uses
          portfolio context.
        </p>
        <div className="ai-suggestions">
          {suggestions.map((suggestion) => (
            <button key={suggestion} onClick={() => ask(suggestion)}>
              <span>↗</span>
              {suggestion}
            </button>
          ))}
        </div>
        {response && (
          <div className="ai-response">
            <span>NAVIGATOR_RESPONSE</span>
            <p>{response.text}</p>
            {action && (
              <button onClick={() => onOpenFile(action.fileId)}>
                {action.label} →
              </button>
            )}
          </div>
        )}
      </div>
      <form
        className="ai-input"
        onSubmit={(event) => {
          event.preventDefault();
          ask(query);
        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask portfolio context..."
          aria-label="Ask AI Navigator"
        />
        <button type="submit" aria-label="Send question">
          ↑
        </button>
      </form>
    </aside>
  );
}
