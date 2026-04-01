import React from 'react';
import { Video, ExternalLink, PlayCircle, BookOpen } from 'lucide-react';
import './Teaching.css';

const courses = [
  {
    title: 'The Modern Generative AI Course',
    domain: 'Udemy Bestseller',
    description: 'Learn everything from Transformer architecture mechanics to building production-ready multi-agent chains with complete CI/CD setups.',
    students: '12,500+',
    icon: <PlayCircle size={32} />
  },
  {
    title: 'LLM Systems Design Series',
    domain: 'YouTube Playlist',
    description: 'A deep dive into system architectures required to scale Large Language Models for 1M+ daily active users.',
    students: '450k Views',
    icon: <Video size={32} />
  },
  {
    title: 'Advanced RAG Patterns',
    domain: 'Substack Newsletter',
    description: 'Weekly breakdowns of papers on retrieval augmentation, chunking strategies, and re-ranking models.',
    students: '4,000 Readers',
    icon: <BookOpen size={32} />
  }
];

const Teaching = () => {
  return (
    <section id="teaching" className="teaching-section">
      <div className="content-wrapper">
        <h2 className="section-title">
          <span>Instruction</span>
          Educational <span className="text-gradient">Content</span>
        </h2>
        
        <div className="teaching-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card glass-card">
              <div className="course-icon-wrapper">
                {course.icon}
              </div>
              <div className="course-content">
                <span className="course-domain">{course.domain}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <div className="course-footer">
                  <span className="course-stats mono">{course.students}</span>
                  <a href="#" className="btn-outline btn"><ExternalLink size={16} /> View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teaching;
