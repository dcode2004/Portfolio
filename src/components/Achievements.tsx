import React from 'react';
import { ACHIEVEMENTS, ACADEMIC_HONOR } from '../data/portfolioData';
import { IconArrowUpRight } from './Icons';

export const Achievements: React.FC = () => {
  return (
    <section className="section-wrapper" id="achievements">
      <div className="site-container">
        <header className="section-header">
          <div className="section-header-eyebrow">Problem Solving & Distinction</div>
          <h2 className="section-title">Competitive Programming & Honors</h2>
          <p className="section-subtitle">
            1,000+ algorithmic problems solved across competitive platforms alongside top-tier institute academic performance.
          </p>
        </header>

        <div className="achievements-layout">
          {/* Data-Driven Scorecard (Non-card tabular layout) */}
          <div className="cp-scorecard">
            <div className="cp-scorecard-header">
              <div>Platform</div>
              <div>Rank / Title</div>
              <div>Contest Rating</div>
              <div className="cp-col-solved">Volume</div>
              <div className="cp-col-link">Profile</div>
            </div>

            {ACHIEVEMENTS.map((item) => (
              <div key={item.platform} className="cp-scorecard-row">
                <div className="cp-platform-name">{item.platform}</div>
                <div className="cp-rank" style={{ color: item.accentColor }}>
                  {item.roleOrRank}
                </div>
                <div className="cp-rating">{item.rating}</div>
                <div className="cp-solved cp-col-solved">{item.problemsSolved}</div>
                <div className="cp-col-link">
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-link"
                    aria-label={`${item.platform} Profile (${item.profileHandle})`}
                  >
                    <span>{item.profileHandle}</span>
                    <IconArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Distinction Strip */}
          <div className="academic-strip">
            <div className="academic-badge-metric">
              {ACADEMIC_HONOR.metric}
            </div>
            <div className="academic-info">
              <div className="academic-title">{ACADEMIC_HONOR.title}</div>
              <p className="academic-desc">{ACADEMIC_HONOR.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
