import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconGithub,
  IconLinkedin,
  IconCopy,
  IconArrowUpRight,
  IconFileText
} from './Icons';

interface ContactProps {
  onCopyEmail: () => void;
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, onOpenResume }) => {
  return (
    <footer className="section-wrapper site-footer-section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="site-container">
        <div className="contact-layout">
          {/* Left Column: Direct Outreach Statement */}
          <div className="contact-copy">
            <div className="section-header-eyebrow">Get In Touch</div>
            <h2 className="contact-headline">
              Let&apos;s discuss production engineering and software architectures.
            </h2>
            <p className="contact-subtext">
              I am open to technical discussions, software engineering opportunities, and discussions around full-stack systems and data pipelines. Reach out directly via email or connect on LinkedIn.
            </p>
            <div style={{ marginTop: '12px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenResume}
              >
                <IconFileText className="w-4 h-4" />
                View Full Resume
              </button>
            </div>
          </div>

          {/* Right Column: Contact Channels with 1-click Copy */}
          <div className="contact-links-grid">
            {/* Email item */}
            <div className="contact-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <IconMail className="w-5 h-5" />
                </div>
                <div className="contact-item-label">
                  <span className="contact-item-title">Direct Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-item-val">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={onCopyEmail}
                aria-label="Copy email address"
              >
                <IconCopy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            {/* Phone item */}
            <div className="contact-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div className="contact-item-label">
                  <span className="contact-item-title">Telephone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="contact-item-val">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="contact-copy-btn"
                aria-label="Call phone number"
              >
                <span>Call</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn item */}
            <div className="contact-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <IconLinkedin className="w-5 h-5" />
                </div>
                <div className="contact-item-label">
                  <span className="contact-item-title">Professional Profile</span>
                  <span className="contact-item-val">LinkedIn / Devansh Vyas</span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-copy-btn"
                aria-label="Visit LinkedIn Profile"
              >
                <span>Connect</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub item */}
            <div className="contact-item">
              <div className="contact-item-left">
                <div className="contact-item-icon">
                  <IconGithub className="w-5 h-5" />
                </div>
                <div className="contact-item-label">
                  <span className="contact-item-title">Source Code</span>
                  <span className="contact-item-val">GitHub / @{PERSONAL_INFO.githubHandle}</span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-copy-btn"
                aria-label="Visit GitHub Profile"
              >
                <span>View</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Footer Bottom */}
      <div className="site-footer" style={{ marginTop: '72px' }}>
        <div className="site-container footer-inner">
          <div>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Vanilla CSS.</span>
          </div>
          <div>
            <a
              href="#"
              className="footer-back-top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Back to Top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
