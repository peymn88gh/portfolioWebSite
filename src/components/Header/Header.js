import LangBar from 'components/LangBar/LangBar';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n} = useTranslation('common');
  const navigate = useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const handleDirection = () => {
      if(window.location.pathname==='/') scroll.scrollTo(600)
      else{
        navigate('/#services')
      }

  };
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          {!menuOpen && <Link to="/" className="text-xl md:font-bold">LeoNet Informatik GmbH</Link>}
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
          <ul className="flex items-center md:gap-10">
            <li><NavLink className=' hover:bg-slate-500 hover:rounded-sm bg-opacity-20 px-2 py-2' to="/" activeClassName="active" exact onClick={scrollToTop}>{t("Home")}</NavLink></li>
            <li ><NavLink className=' hover:bg-slate-500 hover:rounded-sm bg-opacity-20 px-2 py-2'  to="/jobs" activeClassName="active">{t("jobs")}</NavLink></li>
            <li ><NavLink className=' hover:bg-slate-500 hover:rounded-sm bg-opacity-20 px-2 py-2'  to="/about" activeClassName="active">{t("aboutUs")}</NavLink></li>
            <li ><button  className=' hover:bg-slate-500 hover:rounded-sm bg-opacity-20 px-2 py-2 max-md:mr-2' role='button' onClick={handleDirection}>{t("services")}</button></li>
            <li className=' hover:scale-110'>
              <LangBar firstLang={i18n.language} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
