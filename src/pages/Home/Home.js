import React, { useEffect, useRef } from 'react';
import './Home.css';
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { useTranslation } from 'react-i18next';
import initservice from 'data/services.json';
import Services from 'components/Services/Services';
import ThemButton from 'components/button/noirThemButton';
import SecondaryButton from 'components/button/secondaryButton';
import { faEnvelope, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from 'components/aboutMe/AboutMe';
import Tools from 'components/toolsSection/tools';
import Demo from 'components/demo/demo';
import AnimatedComponent from 'components/animateComponent';
import { Element, scroller } from 'react-scroll';
import Testimonials from 'components/testimonials/testimonials';
import { faLinkedin, faTelegram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const variants = {
    initial: { opacity: 0, x: -50 }, // Initial state (hidden to the left)
    animate: { opacity: 1, x: 0 }, // Animation when appearing (moves in from the left)
  };
export default function Home({setSelectedSection}){
    const { t, i18n} = useTranslation('common');
    const isPresent = useIsPresent()
    const backgroundImage = 'url(\'me.jpg\')';
    const homeRef = useRef(null);
    function handleScroll(name){
        scroller.scrollTo(name, {
          duration: 1500,
          delay: 0,
          smooth: 'easeInOutQuint'
        });
      }
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setSelectedSection('home');
              }
            });
          },
          { threshold: 0.5 } // You can adjust the threshold as needed
        );
    
        observer.observe(homeRef.current);
    
        return () => {
          if (homeRef.current) {
            observer.unobserve(homeRef.current);
          }
        };
      }, []);

    return (
        <>
        <div>
            <div  name='home' ref={homeRef}>
                <div 
                style={{backgroundImage}} 
                className="relative overflow-hidden h-screen bg-origin-border bg-fixed bg-[top_right_-10rem] md:bg-[top_right_0rem] lg:bg-[right_top_-7rem] bg-cover bg-no-repeat bg-bg1"
                >
                   
                    <AnimatePresence>
                        {isPresent && (
                            <>
                                <motion.hgroup 
                                    className="absolute top-[45%] left-10 md:left-10 lg:left-44 text-center md:text-justify m-2 leading-tight text-white text-3xl md:text-4xl lg:text-5xl font-poppins"
                                    initial="initial"
                                    animate="animate"
                                    variants={variants}
                                    transition={{ duration: 0.75 }}
                                >
                                    <h1 className=" font-bold ">
                                        {t('motto.first')} 
                                    </h1>
                                    <h1 className=" font-bold ">
                                        {t('motto.second')}
                                    </h1>
                                    <h1 className="mb-4 font-bold ">
                                        {t('motto.third')}
                                    </h1>
                                    <ThemButton onClick={()=>handleScroll('aboutme')}>{t('buttons.discover')}</ThemButton>
                                    <SecondaryButton onClick={()=>handleScroll('contactme')} icon={<FontAwesomeIcon icon={faUser} className='mr-2' />}>{t('buttons.contactme')}</SecondaryButton>
                                </motion.hgroup>
                            </>        
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
           
        <div className='grid grid-cols-1'>
            <Element name='aboutme' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-bg1'>
                {/* <Element name='aboutme'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'aboutme'}>
                    <AboutMe t={t}/>
                </AnimatedComponent> 
                {/* </Element> */}
            </Element>
            <Element name='services' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-white'>
                {/* <Element name='services'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'services'}>
                    <Services  data={initservice.data}/>
                </AnimatedComponent> 
                {/* </Element> */}
            </Element>
            <Element name='testemonials' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-white'>
                {/* <Element name='testemonials'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'testemonials'}>
                    <Testimonials />
                </AnimatedComponent> 
                {/* </Element>   */}
            </Element>
            <Element  name='tools' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-bg1'>
                {/* <Element  name='tools'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'tools'}>
                    <Tools t={t} />
                </AnimatedComponent> 
                {/* </Element> */}
            </Element>
            <Element  name='demo' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-white'>
                {/* <Element  name='demo'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'demo'}>
                    <Demo t={t}/>
                </AnimatedComponent> 
                {/* </Element>    */}
            </Element>
            <Element  name='contactme' className='grid-item py-20 p-5 md:px-10 lg:px-44 bg-bg1'>
                {/* <Element  name='demo'> */}
                <AnimatedComponent setSelectedSection={setSelectedSection} sectionName={'contactme'}>
                <section className="py-8 px-4 text-center">
                    <h2 className="text-3xl text-black font-display mb-3 font-extrabold">{t('contactme.title')}</h2>
                    <p className="text-lg text-accent mb-5">{t('contactme.description')}</p>

                    <div className="flex justify-center mb-8">

                        <div className="space-x-4 text-2xl text-gray-700 cursor-pointer">
                        <a href="mailto:peymn88gh@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://t.me/peymngh" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href="https://www.linkedin.com/in/peyman-ghaemi/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://twitter.com/peyman_ghaemi" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        </div>
                    </div>
                    </section>

                </AnimatedComponent> 
                {/* </Element>    */}
            </Element>
        </div>
        </>
    );
}
