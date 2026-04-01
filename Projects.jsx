import React from 'react';
import { ExternalLink, GitBranch, Database, Cpu } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'Autonomous Data Agent',
    description: 'A multi-agent system built with LangChain and Claude 3.5 Sonnet that can independently query databases, analyze data, and generate reports.',
    tags: ['Python', 'LangChain', 'Claude 3.5 Sonnet', 'PostgreSQL'],
    icon: <Cpu size={24} />,
    github: '#',
    demo: '#'
  },
  {
    title: 'Enterprise RAG Pipeline',
    description: 'Scalable Retrieval-Augmented Generation pipeline using Pinecone vector DB, optimized for massive internal documentation sets with hybrid search capabilities.',
    tags: ['Python', 'Pinecone', 'OpenAI', 'FastAPI'],
    icon: <Database size={24} />,
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="content-wrapper">
        <h2 className="section-title">
          <span>Portfolio</span>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href={project.github} className="social-link"><GitBranch size={20} /></a>
                  <a href={project.demo} className="social-link"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag mono">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
