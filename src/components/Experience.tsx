import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="section-wrapper" id="experience">
      <div className="site-container">
        <header className="section-header">
          <div className="section-header-eyebrow">Work History</div>
          <h2 className="section-title">Selected Experience</h2>
          <p className="section-subtitle">
            Engineering production systems at Deloitte and mentoring foundational computer science at LNMIIT.
          </p>
        </header>

        <div className="experience-list">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-bullet" aria-hidden="true"></div>
              
              <article className="experience-card">
                <div className="experience-card-header">
                  <div className="experience-role-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <span className="experience-period-badge">{exp.period}</span>
                </div>

                {exp.subtitle && (
                  <div className="experience-subtitle">{exp.subtitle}</div>
                )}

                <div className="experience-bullets">
                  {exp.descriptionPoints.map((point, index) => (
                    <div key={index} className="experience-bullet-point">
                      {point}
                    </div>
                  ))}
                </div>

                <div className="tech-tag-row">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
