import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const redirectToServices = () => {
    window.location.href = "/#services"; 
    scroll.scrollTo('services', { smooth: true });
    setMenuOpen(false);
  };
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          {!menuOpen && <Link to="/" className="text-xl font-bold">LeoNet Informatik GmbH</Link>}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex items-center space-x-4">
            <li><NavLink to="/" activeClassName="active" exact onClick={scrollToTop}>Home</NavLink></li>
            <li><NavLink to="/jobs" activeClassName="active">Jobs</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
            <li><ScrollLink to="services" smooth={true} offset={-70}>Services</ScrollLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
