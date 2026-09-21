import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconLeetCode,
  IconCodeforces,
  IconChevronRight
} from './Icons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const engineeringFocus = [
    {
      num: '01',
      title: 'Full-Stack Development',
      desc: 'React · TypeScript · Node.js'
    },
    {
      num: '02',
      title: 'Backend Engineering',
      desc: 'APIs · RBAC · Validation'
    },
    {
      num: '03',
      title: 'Data Processing',
      desc: 'Python · Pandas · PostgreSQL'
    },
    {
      num: '04',
      title: 'Problem Solving',
      desc: '1,000+ DSA problems · Competitive Programming'
    }
  ];

  return (
    <section className="hero-section" id="about">
      <div className="site-container">
        <div className="hero-grid-layout">
          {/* Left Column: Core Positioning */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="hero-badge">
                <span className="status-dot"></span>
                Product Engineer @ Deloitte
              </span>
            </div>

            <h1 className="hero-name">{PERSONAL_INFO.name}</h1>

            <p className="hero-summary">
              {PERSONAL_INFO.summary}
            </p>

            <div className="hero-metadata-list">
              <div className="hero-metadata-item">
                <span>Enterprise Full-Stack</span>
              </div>
              <span>•</span>
              <div className="hero-metadata-item">
                <span>LNMIIT CSE (8.71 GPA)</span>
              </div>
              <span>•</span>
              <div className="hero-metadata-item">
                <span>1,000+ DSA Problems</span>
              </div>
              <span>•</span>
              <div className="hero-metadata-item">
                <span>Top 10% Academic Honors</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary">
                View Experience
                <IconChevronRight size={16} />
              </a>
              <a href="#projects" className="btn btn-secondary">
                Explore Projects
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <IconGithub size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero-social-link"
                aria-label="Send Email"
              >
                <IconMail size={16} />
                <span>Email</span>
              </a>

              <a
                href="https://leetcode.com/u/dcodeDV/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LeetCode Profile"
              >
                <IconLeetCode size={16} />
                <span>LeetCode</span>
              </a>

              <a
                href="https://codeforces.com/profile/dcodeDV"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Codeforces Profile"
              >
                <IconCodeforces size={16} />
                <span>Codeforces</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Focus Index */}
          <div className="hero-focus-column">
            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-header-eyebrow">ENGINEERING FOCUS</span>
              </div>

              <div className="focus-list">
                {engineeringFocus.map((item) => (
                  <div key={item.num} className="focus-item">
                    <span className="focus-num">{item.num}</span>
                    <div className="focus-info">
                      <div className="focus-title">{item.title}</div>
                      <div className="focus-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
