import LangBar from 'components/LangBar/LangBar';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from "framer-motion";
const headerVariants = {
  initial: { opacity: 0, y:-5}, // Initial state when the header is not visible
  animate: { opacity: 1, y:0 }, // Animation when the header becomes visible
};

const Header = ({menuStyles}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n} = useTranslation('common');
  const navigate = useNavigate()
  const AppliedStylesToHeader = giveStylesToMenu('AppliedStylesToHeader',menuStyles)
  const AppliedStylesToNav = giveStylesToMenu('AppliedStylesToNav',menuStyles)
  const AppliedStylesToLi = menuStyles === 'change' ? 'border-r-2 border-primary' : 'border-r-2 border-primary hover:text-primary'
  function giveStylesToMenu(where, state){
    switch (where) {
      case 'AppliedStylesToHeader':{
        if (state === 'change') {
          return 'fixed z-50 w-full font-bebas bg-white';
        }
        else {
          return 'absolute z-50 w-full font-bebas bg-transparent';
        }
        
      }
      case 'AppliedStylesToNav':{
        if (state === 'change') {
          return "flex justify-evenly w-2/3 2xl:w-1/3 font-mono text-xl uppercase";
        }
        if (state === 'default') {
          return "flex justify-evenly w-2/3 2xl:w-1/3 font-mono text-white text-xl uppercase";
        }
        if (state === 'serviceSectionDefault') {
          return "flex justify-evenly w-2/3 2xl:w-1/3 font-mono text-secondary text-xl uppercase";
        }
        
      }
        

    
      default: break;

    }
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const handleDirection = () => {
      // if(window.location.pathname==='/') scroll.scrollTo(600)
      // else{
        navigate('/services')
      // }

  };
  
  return (
    <motion.header
        key={menuStyles} // Ensure a unique key when the menuStyles change
        className={AppliedStylesToHeader}
        variants={headerVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.75 }}
      >
      <nav className="px-4 pt-4 flex flex-row items-start justify-between">
        <div className="w-1/3">
          {!menuOpen && <Link to="/" className=" text-primary text-3xl md:text-4xl font-bold ml-10">{process.env.REACT_APP_NAME}</Link>}
        </div>
        {/* <div className="hidden">
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
        </div> */}
        {/* <div className= 'min-w-[15%] md:hidden md:invisible'></div> */}

        <ul className={AppliedStylesToNav}>
          <li className={AppliedStylesToLi}><NavLink  className='px-3' to="/" activeClassName="active" exact onClick={scrollToTop}>{t("Home")}</NavLink></li>
          <li className={AppliedStylesToLi} ><NavLink className='px-3'  to="/jobs" activeClassName="active">{t("jobs")}</NavLink></li>
          <li className={AppliedStylesToLi} ><NavLink className='px-3'  to="/about" activeClassName="active">{t("aboutUs")}</NavLink></li>
          <li className={AppliedStylesToLi} ><button  className='px-3  uppercase' role='button' onClick={handleDirection}>{t("services")}</button></li>
          <li className=' hover:scale-110'>
            <LangBar firstLang={i18n.language} />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
