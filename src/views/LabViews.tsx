const games = [
  {
    title: 'Interactive Portfolio Prototype',
    status: 'Work in progress',
    stack: ['Unity', 'C#', 'WebGL', 'UX'],
    summary:
      'A Unity-based portfolio prototype where visitors explore projects through a 3D character and interactive space.',
    links: [
      { label: 'Itch.io', href: 'https://gaitanjulian.itch.io/interactive-portfolio-prototype' },
      { label: 'GitHub', href: 'https://github.com/GaitanJulian/interactivePortfolio' },
    ],
  },
  {
    title: 'Bootcamp Brawlers',
    status: 'Complete',
    stack: ['Unity', 'C#', 'Local Multiplayer'],
    summary: 'Arena brawler for up to four players with hazards, pickups and party-game pacing.',
    links: [
      { label: 'Itch.io', href: 'https://joulesp.itch.io/boot-camp-brawlers' },
      { label: 'GitHub', href: 'https://github.com/GaitanJulian/BootCampBrawlersCodeSamples' },
    ],
  },
  {
    title: 'Life by Candlelight',
    status: 'Complete',
    stack: ['Unity', 'Lighting', 'Level Design'],
    summary: 'Narrative horror prototype centered on light management, tension and environmental storytelling.',
    links: [
      { label: 'Itch.io', href: 'https://damamapi.itch.io/life-by-candlelight' },
      { label: 'GitHub', href: 'https://github.com/GaitanJulian/UnityIVSecondJam' },
    ],
  },
  {
    title: 'Xenofurious Sabotage',
    status: 'Complete',
    stack: ['Unity', '2D', 'C#'],
    summary: 'Pixel-art arcade shooter focused on tuned enemy patterns and responsive controls.',
    links: [
      { label: 'Itch.io', href: 'https://pi6g.itch.io/xenofurious-sabotage' },
      { label: 'GitHub', href: 'https://github.com/pi6G/XenofuriousSabotage' },
    ],
  },
  {
    title: 'NanoEscape',
    status: 'Complete',
    stack: ['Unity', 'C#', 'Level Design'],
    summary: 'Puzzle-platformer built around mechanics clarity and compact level pacing.',
    links: [
      { label: 'Itch.io', href: 'https://gaitanjulian.itch.io/nanoescape' },
      { label: 'GitHub', href: 'https://github.com/ZenSeit/FirstJam' },
    ],
  },
  {
    title: 'Runes Quest',
    status: 'Prototype',
    stack: ['Unity', 'UI', 'C#'],
    summary: 'Card-and-strategy prototype combining lane combat with interface experimentation.',
    links: [
      { label: 'Itch.io', href: 'https://gaitanjulian.itch.io/runes-quest' },
      { label: 'GitHub', href: 'https://github.com/GaitanJulian/CardGame' },
    ],
  },
  {
    title: 'Dimensional Dream',
    status: 'Game jam',
    stack: ['Unity', 'C#', 'Jam Game'],
    summary: 'Rapid jam project built around collaboration, quick iteration and puzzle-platforming ideas.',
    links: [
      { label: 'Itch.io', href: 'https://gaitanjulian.itch.io/dimensional-dream' },
      { label: 'GitHub', href: 'https://github.com/GaitanJulian/Kenney2023' },
    ],
  },
];

export function UnityExperimentsView() {
  return (
    <div className="document structured-view lab-view">
      <p className="code-comment"># lab/unity-experiments.md</p>
      <h1>Unity and XR work, documented as real side projects.</h1>
      <p>
        This area tracks the game and XR projects from the older portfolio. Backend engineering
        remains the main professional focus, but these projects show applied work in interaction
        systems, real-time logic and spatial experiences.
      </p>
      <div className="log-list">
        <section>
          <span>XR_TRACK</span>
          <h2>Postpartum Hemorrhage XR Simulation</h2>
          <ul>
            <li>Unity + C# simulator for Meta Quest 3 training scenarios.</li>
            <li>Designed around mixed-reality interactions, session data capture and analytics.</li>
          </ul>
        </section>
        <section>
          <span>GAME_TRACK</span>
          <h2>Interactive and game prototypes</h2>
          <ul>
            <li>Multiple Unity projects published through GitHub and Itch.io.</li>
            <li>Includes solo prototypes, collaborative jams and a portfolio-in-Unity experiment.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export function UnityLauncherView() {
  return (
    <div className="document structured-view launcher-view">
      <span className="launcher-view__badge">ROADMAP · UNAVAILABLE</span>
      <h1>interactive-portfolio.unity</h1>
      <p>
        The Unity portfolio prototype exists as an external experiment rather than an embedded build
        inside this site.
      </p>
      <div className="warning-box">
        <strong>Prototype available outside this page</strong>
        <span>
          It is linked from the lab section to avoid loading a large runtime during the main
          portfolio session.
        </span>
      </div>
      <div className="tag-list tag-list--large">
        <a className="tag" href="https://gaitanjulian.itch.io/interactive-portfolio-prototype" target="_blank" rel="noreferrer">
          Itch.io
        </a>
        <a className="tag" href="https://github.com/GaitanJulian/interactivePortfolio" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export function GamePrototypesView() {
  return (
    <div className="document structured-view lab-view">
      <p className="code-comment"># lab/game-prototypes.md</p>
      <h1>Prototype archive</h1>
      <p>Selected game projects from the older portfolio, with their current public links.</p>
      <div className="log-list">
        {games.map((game) => (
          <section key={game.title}>
            <span>{game.status.toUpperCase()}</span>
            <h2>{game.title}</h2>
            <p>{game.summary}</p>
            <div className="tag-list">
              {game.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="tag-list">
              {game.links.map((link) => (
                <a className="tag" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
