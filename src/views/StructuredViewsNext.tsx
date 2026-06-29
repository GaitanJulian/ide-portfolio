import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const profileFacts = [
  ['Location', 'Colombia'],
  ['English', 'C1'],
  ['Availability', 'Remote-ready'],
  ['Focus', 'Backend Engineering'],
];

const currentFocus = [
  'Building scalable backend services',
  'Designing API boundaries and service workflows',
  'Working with data pipelines and automation',
  'Exploring AI tooling with LangGraph, Ollama, Whisper and n8n',
  'Turning technical complexity into usable systems',
  'Always learning, always shipping',
];

const principles = [
  'Clean Architecture',
  'Testable Systems',
  'Data Reliability',
  'Useful Automation',
  'Explicit Documentation',
  'Practical AI Tooling',
];

const capabilityGroups: { title: string; items: [string, number][] }[] = [
  {
    title: 'Backend & APIs',
    items: [
      ['Node.js / TypeScript', 92],
      ['Express / REST APIs', 90],
      ['Python / FastAPI', 86],
      ['Prisma / SQLAlchemy', 84],
    ],
  },
  {
    title: 'Data & Storage',
    items: [
      ['PostgreSQL', 90],
      ['MongoDB', 82],
      ['Data pipelines', 88],
      ['Data quality checks', 86],
    ],
  },
  {
    title: 'AI Tooling',
    items: [
      ['LangGraph', 84],
      ['Ollama / local LLMs', 82],
      ['Whisper / transcription', 86],
      ['n8n workflows', 88],
    ],
  },
  {
    title: 'Testing & Delivery',
    items: [
      ['Vitest / Supertest', 84],
      ['Pytest', 82],
      ['Docker', 88],
      ['Documentation', 90],
    ],
  },
  {
    title: 'Creative Tech',
    items: [
      ['Unity / C#', 86],
      ['Meta Quest / XR', 82],
    ],
  },
];

const toSignalPercent = (value: number) => Math.max(0, Math.min(100, value));

export function ProfileViewNext() {
  return (
    <div className="document structured-view">
      <section className="profile-shell">
        <div className="profile-hero">
          <div>
            <p className="code-comment"># profile.yaml</p>
            <h1>Julian Gaitan</h1>
            <p className="profile-hero__role">Backend Engineer</p>
            <p className="profile-hero__tagline">Systems, APIs, data workflows and AI-powered tools.</p>
          </div>
          <div className="profile-meta-card">
            <span>ABOUT_CONTEXT</span>
            <strong>Systems and Computer Engineering graduate</strong>
            <p>Focused on backend engineering with production-minded boundaries, maintainability and useful delivery.</p>
          </div>
        </div>

        <div className="profile-layout">
          <article className="profile-summary-card">
            <span>summary</span>
            <p>
              I&apos;m a Systems and Computer Engineering graduate from Colombia focused on backend engineering,
              automation workflows, data pipelines and AI-powered technical tools. I care about building reliable
              systems with clear boundaries, testable behavior and practical documentation.
            </p>
          </article>

          <aside className="profile-facts-card">
            <span>metadata</span>
            <div className="profile-facts-grid">
              {profileFacts.map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="profile-focus-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">current focus</p>
              <h2>What I&apos;m building around right now</h2>
            </div>
          </div>
          <div className="focus-grid focus-grid--about">
            {currentFocus.map((item) => (
              <div key={item}>
                <span>FOCUS_SIGNAL</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="profile-principles-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">engineering principles</p>
              <h2>How I like systems to behave</h2>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map((item) => (
              <article key={item}>
                <span>PRINCIPLE</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export function ExperienceViewNext() {
  return (
    <div className="document structured-view">
      <p className="code-comment">[experience.log] verified professional context</p>
      <div className="experience-timeline">
        <section className="experience-card">
          <span>ACTIVE_CONTEXT</span>
          <h2>Invisible | Software Engineer AI Trainer</h2>
          <p>
            Current professional context centered on code evaluation, model output review and technical reliability
            across structured programming tasks.
          </p>
          <ul>
            <li>Evaluated LLM-generated code and reasoning.</li>
            <li>Debugged Python, C#, SQL and programming tasks.</li>
            <li>Designed and reviewed test cases.</li>
            <li>Compared model outputs for correctness, quality and reliability.</li>
            <li>Worked with large-scale data validation and technical evaluation workflows.</li>
          </ul>
        </section>

        <section className="experience-card">
          <span>INTERNSHIP_2026</span>
          <h2>Campuslands | Software Engineering Intern</h2>
          <p>
            Internship experience supporting internal products, AI initiatives and B2B applications in a fast-moving
            engineering environment.
          </p>
          <ul>
            <li>Designed, debugged and maintained workflow automations using n8n.</li>
            <li>Implemented AI agents and chatbots for internal and product-facing workflows.</li>
            <li>Integrated external services and APIs into operational tools and company systems.</li>
            <li>Fixed frontend, backend and API issues across multiple existing projects.</li>
            <li>Reproduced and resolved high-priority bugs through root-cause analysis.</li>
            <li>Designed and developed a B2B matchmaking platform connecting buyers and sellers.</li>
            <li>Implemented an automated matching engine powered by n8n workflows.</li>
          </ul>
        </section>

        <section className="experience-card">
          <span>PROJECT_CONTEXT</span>
          <h2>Backend Projects, Data Pipelines and Automation Workflows</h2>
          <p>
            Independent work focused on production-minded APIs, systems boundaries, practical documentation and
            backend delivery flows that are usable beyond demo scope.
          </p>
          <ul>
            <li>Built backend systems, APIs, data pipelines and automation workflows.</li>
            <li>Worked on local AI tooling and workflow orchestration.</li>
            <li>Kept architecture, testing and documentation as first-class concerns.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export function CapabilitiesViewNext() {
  return (
    <div className="document structured-view">
      <p className="code-comment">{`// capabilities.json — visual working signals, not absolute scores`}</p>
      <section className="capabilities-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">working confidence</p>
            <h1>Current technical emphasis</h1>
          </div>
          <span className="section-index">SIGNALS 80-96</span>
        </div>
        <p className="capabilities-note">
          Signals are visual indicators of current focus and working familiarity, not formal proficiency scores.
        </p>
        <div className="capability-signal-grid">
          {capabilityGroups.map((group) => (
            <section key={group.title} className="capability-signal-card">
              <span>{group.title}</span>
              <div className="capability-signal-list">
                {group.items.map(([label, value]) => (
                  <article key={label} className="capability-signal-item">
                    <div className="capability-signal-head">
                      <strong>{label}</strong>
                      <small>{value}</small>
                    </div>
                    <div
                      className="capability-bar-track"
                      role="progressbar"
                      aria-label={`${label} working confidence`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={value}
                    >
                      <div className="capability-bar-fill" style={{ width: `${toSignalPercent(value)}%` }} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export function SystemsViewNext({ onOpen }: { onOpen: (fileId: string) => void }) {
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
