import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpen?: (fileId: string) => void;
  compact?: boolean;
}

export function ProjectCard({ project, onOpen, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      <div className="project-card__topline">
        <span>{project.eyebrow}</span>
        <span className="project-card__status">documented</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.stack.slice(0, compact ? 4 : 6).map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      {onOpen && (
        <button className="text-button" onClick={() => onOpen(project.fileId)}>
          Open case study <span aria-hidden="true">↗</span>
        </button>
      )}
    </article>
  );
}
