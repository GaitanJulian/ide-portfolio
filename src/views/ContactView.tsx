export function ContactView() {
  return (
    <div className="document contact-view">
      <p className="terminal-prompt">julian@portfolio:~$ ./contact.sh</p>
      <div className="contact-output">
        <p>Initializing professional contact channels...</p>
        <p className="success-line">✓ profile context loaded</p>
        <p className="success-line">✓ remote collaboration enabled</p>
        <div className="contact-table">
          <div>
            <span>GitHub</span>
            <a href="https://github.com/GaitanJulian" target="_blank" rel="noreferrer">
              github.com/GaitanJulian ↗
            </a>
          </div>
          <div>
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/gaitanjuliandev" target="_blank" rel="noreferrer">
              linkedin.com/in/gaitanjuliandev ↗
            </a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:juliangaitan_h@hotmail.com">juliangaitan_h@hotmail.com</a>
          </div>
          <div>
            <span>Resume</span>
            <strong>resume.pdf not attached yet</strong>
          </div>
        </div>
        <h1>Interested in building reliable systems?</h1>
        <p>Open a conversation about backend engineering, data workflows or AI-powered tools.</p>
      </div>
    </div>
  );
}
