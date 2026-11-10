import { professional } from '../data/professional';
import { Localized } from '../i18n/Language';
import { useEffect, useState } from 'react';

const contactChannels = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/GaitanJulian',
    href: professional.github,
    icon: 'GH',
    actionLabel: 'Open link',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gaitanjuliandev',
    href: professional.linkedin,
    icon: 'IN',
    actionLabel: 'Open link',
  },
  {
    id: 'email',
    label: 'Email',
    value: professional.email,
    copyValue: professional.email,
    icon: 'EM',
    actionLabel: 'Copy email',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Resume downloads',
    href: '/cv/julian-gaitan-es.pdf',
    icon: 'CV',
    actionLabel: 'Resume pending',
    disabled: true,
  },
];

const availability = [
  ['Backend / Full-Stack roles', 'Open to Backend / Full-Stack opportunities'],
  ['Remote-ready', 'Available for distributed collaboration'],
  ['Location', 'Bucaramanga, Colombia / GMT-5'],
  ['English', 'C1 · Self-reported'],
  ['Focus', 'APIs, integrations and software quality'],
  ['Status', 'Available immediately'],
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
      await navigator.clipboard.writeText(professional.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return <Localized><div className="document contact-view">
      <p className="terminal-prompt">julian@portfolio:~$ ./contact.sh</p>
      <section className="contact-panel">
        <header className="contact-panel__header">
          <div>
            <p className="eyebrow">contact.sh</p>
            <h1>
              <span className="contact-title__protocol">CONTACT_PROTOCOL:</span>{' '}
              <span className="contact-title__state">OPEN</span>
            </h1>
            <p>Interested in building reliable systems?</p>
          </div>
          <div className="contact-panel__signal">
            <span className="status-dot" />
            <strong>Remote collaboration enabled</strong>
            <small>Professional channels</small>
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
                    <a href={channel.href} download={channel.id === 'resume' || undefined} target="_blank" rel="noreferrer" className="contact-card__action">
                      {channel.actionLabel}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="contact-card__action"
                      onClick={channel.copyValue ? copyEmail : undefined}
                      disabled={false}
                    >
                      {channel.actionLabel}
                    </button>
                  )}
                {channel.id === 'resume' && <a href="/cv/julian-gaitan-en.pdf" download className="contact-card__action">Download resume (EN)</a>}
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
              <p className="contact-feedback">{copied ? 'Email copied' : 'Resume available in English and Spanish'}</p>
            </section>
          </aside>
        </div>
      </section>
    </div></Localized>;
}
