import { useEffect, useState } from 'react';

const contactChannels = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/GaitanJulian',
    href: 'https://github.com/GaitanJulian',
    icon: 'GH',
    actionLabel: 'Open link',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gaitanjuliandev',
    href: 'https://www.linkedin.com/in/gaitanjuliandev',
    icon: 'IN',
    actionLabel: 'Open link',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'juliangaitan_h@hotmail.com',
    copyValue: 'juliangaitan_h@hotmail.com',
    icon: 'EM',
    actionLabel: 'Copy email',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'resume.pdf not attached yet',
    icon: 'CV',
    actionLabel: 'Resume pending',
    disabled: true,
  },
];

const availability = [
  ['Backend roles', 'Open to backend and platform conversations'],
  ['Remote-ready', 'Available for distributed collaboration'],
  ['Location', 'Colombia / GMT-5'],
  ['English', 'C1'],
  ['Focus', 'APIs, data workflows, AI-powered tools'],
  ['Status', 'Open to conversations'],
];

export function ContactView() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeoutId = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('juliangaitan_h@hotmail.com');
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="document contact-view">
      <p className="terminal-prompt">julian@portfolio:~$ ./contact.sh</p>
      <section className="contact-panel">
        <header className="contact-panel__header">
          <div>
            <p className="eyebrow">contact.sh</p>
            <h1>CONTACT_PROTOCOL: OPEN</h1>
            <p>Interested in building reliable systems?</p>
          </div>
          <div className="contact-panel__signal">
            <span className="status-dot" />
            <strong>Remote collaboration enabled</strong>
            <small>Professional channels verified</small>
          </div>
        </header>

        <div className="contact-layout">
          <section className="contact-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">channels</p>
                <h2>Contact channels</h2>
              </div>
            </div>
            <div className="contact-card-grid">
              {contactChannels.map((channel) => (
                <article className="contact-card" key={channel.id}>
                  <div className="contact-card__icon" aria-hidden="true">
                    {channel.icon}
                  </div>
                  <div className="contact-card__body">
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </div>
                  {channel.href ? (
                    <a href={channel.href} target="_blank" rel="noreferrer" className="contact-card__action">
                      {channel.actionLabel}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="contact-card__action"
                      onClick={channel.copyValue ? copyEmail : undefined}
                      disabled={channel.disabled}
                    >
                      {channel.actionLabel}
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>

          <aside className="contact-sidebar">
            <section className="contact-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">availability</p>
                  <h2>Collaboration context</h2>
                </div>
              </div>
              <div className="contact-metadata">
                {availability.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="contact-section contact-cta-panel">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">actions</p>
                  <h2>Start the conversation</h2>
                </div>
              </div>
              <div className="contact-cta-list">
                <a className="primary-button" href="https://github.com/GaitanJulian" target="_blank" rel="noreferrer">
                  Open GitHub
                </a>
                <a className="secondary-button" href="https://www.linkedin.com/in/gaitanjuliandev" target="_blank" rel="noreferrer">
                  Open LinkedIn
                </a>
                <button type="button" className="secondary-button" onClick={copyEmail}>
                  Copy Email
                </button>
              </div>
              <p className="contact-feedback">{copied ? 'Email copied' : 'resume.pdf not attached yet'}</p>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
