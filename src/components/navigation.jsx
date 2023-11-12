import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();

  // This function handles the in-page navigation for anchor links
  const handleNavClick = (anchor) => {
    // If we're already on the home page, just scroll to the anchor
    if(window.location.pathname === '/') {
      const element = document.getElementById(anchor);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate home and then scroll
      navigate('/').then(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/" onClick={() => handleNavClick('header')}>
            GOT SOLAR
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" onClick={() => handleNavClick('about')}>
                About
              </a>
            </li>
            <li>
              <a href="#timeline" onClick={() => handleNavClick('timeline')}>
                Timeline
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => handleNavClick('portfolio')}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick('contact')}>
                Contact
              </a>
            </li>
            <li>
              <Link to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
