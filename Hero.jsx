import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="about">
      <div className="content-wrapper hero-content">
        <div className="hero-badge anim-fade-in delay-1 glass-card">
          <Code size={16} className="badge-icon" />
          <span>AI Engineer & Educator</span>
        </div>
        
        <h1 className="hero-title anim-fade-in delay-2">
          Building <span className="text-gradient">Intelligent Systems</span><br />
          and teaching you how to do it.
        </h1>
        
        <p className="hero-subtitle anim-fade-in delay-3">
          I'm Alex, a Senior AI Engineer specializing in LLMs, Agentic Architectures, and RAG pipelines. 
          When I'm not building the future, I'm creating top-tier educational content for engineers 
          transitioning into AI.
        </p>

        <div className="hero-actions anim-fade-in delay-3">
          <a href="#projects" className="btn btn-primary">
            See My Work <ArrowRight size={18} />
          </a>
          <a href="#teaching" className="btn btn-outline">
            View Courses
          </a>
        </div>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="hero-abstract anim-float">
        <div className="abstract-glow"></div>
        <div className="abstract-grid"></div>
      </div>
    </section>
  );
}

export default Hero;
