import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function ProfileView() {
  return (
    <div className="document structured-view">
      <p className="code-comment"># profile.yaml</p>
      <pre className="code-block">
        <code>
{`name: Julian Gaitan
role: Backend Engineer
location: Colombia
availability: Remote-ready
english: C1
education: Systems and Computer Engineering graduate
focus:
  - scalable backend services
  - APIs and data workflows
  - AI-powered technical tools
principles:
  - clean architecture
  - strong testing
  - explicit reliability
  - useful documentation`}
        </code>
      </pre>
    </div>
  );
}

export function ExperienceView() {
  return (
    <div className="document structured-view">
      <p className="code-comment">[experience.log] verified professional context</p>
      <div className="log-list">
        <section>
          <span>ACTIVE_CONTEXT</span>
          <h2>Invisible — Software Engineer AI Trainer</h2>
          <ul>
            <li>Evaluated LLM-generated code and reasoning.</li>
            <li>Debugged Python, C#, SQL and programming tasks.</li>
            <li>Designed and reviewed test cases.</li>
            <li>Compared model outputs for correctness, quality and reliability.</li>
            <li>Worked with large-scale data validation and technical evaluation workflows.</li>
          </ul>
        </section>
        <section>
          <span>PROJECT_CONTEXT</span>
          <h2>Independent Backend Projects</h2>
          <ul>
            <li>Built backend systems, APIs, data pipelines and automation workflows.</li>
            <li>Focused on clean architecture, testing, documentation and deployment readiness.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export function CapabilitiesView() {
  const groups = {
    Backend: ['Node.js', 'TypeScript', 'Express', 'Python', 'FastAPI'],
    Databases: ['PostgreSQL', 'MongoDB', 'SQLite', 'Prisma', 'SQLAlchemy'],
    DevOps: ['Docker', 'GitHub Actions', 'Render', 'Vercel'],
    Testing: ['Vitest', 'Supertest', 'Pytest'],
    'AI Tooling': ['LangGraph', 'Ollama', 'Whisper', 'RAG', 'n8n'],
    'Creative Tech': ['Unity', 'C#', 'Meta Quest 3'],
  };

  return (
    <div className="document structured-view">
      <p className="code-comment">{`// capabilities.json — no arbitrary percentages`}</p>
      <div className="capability-grid">
        {Object.entries(groups).map(([group, items]) => (
          <section key={group}>
            <span>{group}</span>
            <div className="tag-list">
              {items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function SystemsView({ onOpen }: { onOpen: (fileId: string) => void }) {
  return (
    <div className="document structured-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">systems/</p>
          <h1>Project database</h1>
        </div>
        <span className="section-index">{String(projects.length).padStart(2, '0')} RECORDS</span>
      </div>
      <div className="project-grid project-grid--all">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
