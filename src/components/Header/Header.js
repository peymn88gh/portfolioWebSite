import LangBar from 'components/LangBar/LangBar';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faHamburger, faP } from '@fortawesome/free-solid-svg-icons';
const headerVariants = {
  initial: { opacity: 0}, // Initial state when the header is not visible
  animate: { opacity: 1}, // Animation when the header becomes visible
  exit: { opacity: 1},
};
const logoVariants = {
  initial: { opacity: 0},
  animate: { opacity: 1},
  exit: { opacity: 1},
};

const Header = ({menuStyles, open, cycleOpen}) => {
  
  const { t, i18n} = useTranslation('common');
  const navigate = useNavigate()
  const AppliedStylesToHeader = giveStylesToMenu('AppliedStylesToHeader',menuStyles)
  const AppliedStylesToNav = giveStylesToMenu('AppliedStylesToNav',menuStyles)

  function giveStylesToMenu(where, state){
    switch (where) {
      case 'AppliedStylesToHeader':{
        if (state === 'change') {
          return 'fixed z-50 pt-2 max-h-max w-full font-sans bg-secondary';
        }
        else {
          return 'absolute mt-5 z-50 w-full font-sans bg-transparent';
        }
        
      }
      case 'AppliedStylesToNav':{
        if (state === 'change') {
          return "max-md:hidden flex justify-evenly w-1/3 font-sans  text-white text-lg";
        }
        if (state === 'default') {
          return "max-md:hidden flex justify-evenly w-1/3 font-sans text-white text-lg";
        }
        if (state === 'serviceSectionDefault') {
          return "max-md:hidden flex justify-evenly w-2/3 font-sans text-secondary text-xl";
        }
        
      }
        

    
      default: break;

    }
  }
  

  const scrollToTop = () => {
    scroll.scrollToTop();
    // setMenuOpen(false);
  };

 
  
  return (
    <motion.header
        // key={menuStyles} // Ensure a unique key when the menuStyles change
        className={AppliedStylesToHeader}
        
      >
      <nav className=" px-10 mt-4 flex flex-row justify-between items-start md:items-start md:justify-between text-center">
        
        <motion.img variants={logoVariants} initial="initial" animate="animate" transition={{ duration: 2 }} className=' mb-3 h-10 w-44 scale-75' src='/PLogo.png'/>        

        <motion.ul variants={headerVariants} initial="initial" animate="animate" transition={{ duration: 2 }} className={AppliedStylesToNav}>
          <li className=' hover:text-accent duration-150'><NavLink  className='px-2' to="/" activeClassName="active" exact onClick={scrollToTop}>{t("Home")}</NavLink></li>
          <li className=' hover:text-accent duration-150' ><NavLink className='px-2'  to="/jobs" activeClassName="active">{t("contact")}</NavLink></li>
          <li className=' hover:text-accent duration-150' ><NavLink className='px-2'  to="/about" activeClassName="active">{t("about")}</NavLink></li>
          <li className=' hover:text-accent duration-150' ><NavLink className='px-2'  to="/services" activeClassName="active">{t("services")}</NavLink></li>
          <li className=' hover:scale-110'>
            <LangBar firstLang={i18n.language} />
          </li>
        </motion.ul>
      {!open && <button onClick={cycleOpen} className='md:hidden text-white start-0 mt-2 scale-125'><circle className={` py-2 px-3 ${menuStyles==='default' ? 'hover:bg-black focus:bg-black' : 'hover:bg-accent focus:bg-accent'} rounded-full  duration-150 transition-colors`}><FontAwesomeIcon icon={faBars}/></circle></button>}
      {open && <button onClick={cycleOpen} className='md:hidden text-white start-0 mt-2 scale-125'><circle className={` py-2 px-3 ${menuStyles==='default' ? 'hover:bg-black focus:bg-black' : 'hover:bg-accent focus:bg-accent'} rounded-full  duration-150 transition-colors`}><FontAwesomeIcon icon={faClose}/></circle></button>}
      </nav>
    </motion.header>
  );
};

export default Header;
