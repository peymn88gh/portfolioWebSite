import React from 'react';
import './Home.css';
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import HirePeople from 'components/hire/HirePeople';
import { useTranslation } from 'react-i18next';
import initservice from 'data/services.json';
import Services from 'components/Services/Services';
import ThemButton from 'components/button/noirThemButton';
import SecondaryButton from 'components/button/secondaryButton';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from 'components/aboutMe/AboutMe';
import Tools from 'components/toolsSection/tools';
import Demo from 'components/demo/demo';
import AnimatedComponent from 'components/animateComponent';
import { Element } from 'react-scroll';
const variants = {
    initial: { opacity: 0, x: -50 }, // Initial state (hidden to the left)
    animate: { opacity: 1, x: 0 }, // Animation when appearing (moves in from the left)
  };
export default function Home({setSelectedSection}){
    const { t, i18n} = useTranslation('common');
    const isPresent = useIsPresent()
    const backgroundImage = 'url(\'me.jpg\')';


    return (
        <>
        <Element  name='home'>
            <div className="relative">
                <div 
                    style={{backgroundImage}} 
                    className=" bg-origin-border bg-fixed bg-[center_right_-5rem] md:bg-[right_bottom_-10rem] bg-cover bg-no-repeat bg-secondary h-screen w-screen  overflow-hidden flex flex-col justify-center items-center md:items-start "
                >
                {/* <img src='me.jpg' className=''/> */}

                    
                </div>
                <AnimatePresence>
                        {isPresent && (
                            <>
                                <motion.hgroup 
                                    className="absolute top-[40%] left-[15%] text-white text-justify text-4xl md:text-6xl leading-tight"
                                    initial="initial"
                                    animate="animate"
                                    variants={variants}
                                    transition={{ duration: 0.75 }}
                                >
                                    <h1 className="  font-sans max-md:mb-4 ">
                                    {t('motto.first')} <br /> {t('motto.second')} <br />{' '}
                                        <p className=""> {t('motto.third')}</p>
                                    </h1>
                                    <ThemButton>Discover</ThemButton>
                                    <SecondaryButton icon={<FontAwesomeIcon icon={faUser} className='mr-2' />}>contact me</SecondaryButton>
                                </motion.hgroup>
                            </>        
                        )}
                    </AnimatePresence>
            </div>
        </Element>
            
            <Element name='aboutme'>
               <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'aboutme'}>
                    <AboutMe t={t}/>
                </AnimatedComponent> 
            </Element>
            <Element name='services'>
               <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'services'}>
                    <Services  data={initservice.data}/>
                </AnimatedComponent> 
            </Element>
            <Element name='testemonials'>
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'testemonials'}>
                    <HirePeople />
                </AnimatedComponent> 
            </Element>
            <Element  name='tools'>
               <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'tools'}>
                    <Tools t={t} />
                </AnimatedComponent> 
            </Element>
            <Element  name='demo'>
               <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'demo'}>
                    <Demo t={t}/>
                </AnimatedComponent> 
            </Element>
            
            
        </>
    );
}
