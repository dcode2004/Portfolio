import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section className="section-wrapper" id="skills">
      <div className="site-container">
        <header className="section-header">
          <div className="section-header-eyebrow">Technical Inventory</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, core CS coursework, and engineering tools used in production and academic environments.
          </p>
        </header>

        <div className="skills-container">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="skills-row">
              <div className="skills-category-title">
                {cat.category}
              </div>
              <div className="skills-pills">
                {cat.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
