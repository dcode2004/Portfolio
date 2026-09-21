import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { IconGithub, IconArrowUpRight } from './Icons';

export const Projects: React.FC = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div className="site-container">
        <header className="section-header">
          <div className="section-header-eyebrow">Engineering Work</div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Full-stack systems emphasizing concurrency handling, asynchronous webhook ingestion, and secure platform architectures.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`${project.title} source code on GitHub`}
                    >
                      <IconGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <IconArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="project-subtitle">{project.subtitle}</div>

                <div className="project-bullets">
                  {project.descriptionPoints.map((point, index) => (
                    <div key={index} className="project-bullet-item">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-tag-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
