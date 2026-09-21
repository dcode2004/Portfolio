import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="section-wrapper" id="education">
      <div className="site-container">
        <header className="section-header">
          <div className="section-header-eyebrow">Academic Background</div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal computer science engineering and foundational academics.
          </p>
        </header>

        <div className="education-timeline">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="education-entry">
              <div className="education-period">{edu.period}</div>
              <div className="education-main">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
                {edu.details && (
                  <div className="education-details">{edu.details}</div>
                )}
              </div>
              <div className="education-score-badge">
                <div className="education-score-val">{edu.score}</div>
                <div className="education-score-lbl">{edu.scoreType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
