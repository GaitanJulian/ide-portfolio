import type { ReactNode } from 'react';

export type FileCategory = 'root' | 'systems' | 'architecture' | 'lab';
export type FileKind = 'markdown' | 'yaml' | 'log' | 'json' | 'shell' | 'unity' | 'pdf';

export interface PortfolioFile {
  id: string;
  path: string;
  filename: string;
  kind: FileKind;
  title: string;
  category: FileCategory;
  summary: string;
  tags?: string[];
  render: () => ReactNode;
}

export interface Project {
  id: string;
  fileId: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  focus: string[];
  featured?: boolean;
  context: string;
  status: string;
  role: string;
  decisions: string[];
  tradeoffs: string;
  testing: string;
  evidence: string;
  links?: { label: string; href: string }[];
}

export interface TerminalLine {
  id: number;
  kind: 'command' | 'output' | 'error';
  text: string;
}

export interface LabState {
  unlocked: boolean;
  challengePassed: boolean;
}

export interface AiResponse {
  text: string;
  action?: {
    label: string;
    fileId: string;
  };
}
