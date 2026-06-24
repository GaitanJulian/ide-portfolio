const contacts = [
  ['GitHub', 'github.com/Juliangaitan'],
  ['LinkedIn', 'linkedin.com/in/juliangaitan'],
  ['Email', 'Available on request'],
  ['Resume', 'resume.pdf not attached yet'],
];

export function ContactView() {
  return (
    <div className="document contact-view">
      <p className="terminal-prompt">julian@portfolio:~$ ./contact.sh</p>
      <div className="contact-output">
        <p>Initializing professional contact channels...</p>
        <p className="success-line">✓ profile context loaded</p>
        <p className="success-line">✓ remote collaboration enabled</p>
        <div className="contact-table">
          {contacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <h1>Interested in building reliable systems?</h1>
        <p>Open a conversation about backend engineering, data workflows or AI-powered tools.</p>
      </div>
    </div>
  );
}
