import React from 'react';
import { Terminal, GitBranch, Briefcase, MessageSquare } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container glass-card">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Terminal className="logo-icon" size={24} />
          <span className="logo-text">Alex_AI</span>
        </div>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#teaching">Teaching</a>
        </nav>
        <div className="navbar-socials">
          <a href="#" className="social-link"><GitBranch size={20} /></a>
          <a href="#" className="social-link"><Briefcase size={20} /></a>
          <a href="#" className="social-link"><MessageSquare size={20} /></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
