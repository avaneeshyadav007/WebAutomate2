import React from 'react';
import { Mail, GitBranch, MessageSquare, Briefcase, Video } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="content-wrapper">
        <div className="footer-glass glass-card">
          <div className="footer-content">
            <h2 className="footer-title">Let's build the future.</h2>
            <p className="footer-subtitle">
              Have an exciting AI project or speaking opportunity? I'm always open to discussing new ideas.
            </p>
            <a href="mailto:hello@example.com" className="btn btn-primary footer-btn">
              <Mail size={18} /> Get in Touch
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="logo-text mono">Alex<span className="text-gradient">_AI</span> © {new Date().getFullYear()}</span>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-link"><MessageSquare size={20} /></a>
            <a href="#" className="social-link"><GitBranch size={20} /></a>
            <a href="#" className="social-link"><Briefcase size={20} /></a>
            <a href="#" className="social-link"><Video size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
