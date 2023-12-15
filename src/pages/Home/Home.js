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
const variants = {
    initial: { opacity: 0, x: -50 }, // Initial state (hidden to the left)
    animate: { opacity: 1, x: 0 }, // Animation when appearing (moves in from the left)
  };
export default function Home(){
    const { t, i18n} = useTranslation('common');
    const isPresent = useIsPresent()



    return (
        <>
            <div className=" h-screen w-screen relative overflow-hidden">
                <div className=" absolute z-10 bg-secondary bg-opacity-90 w-screen h-screen flex-col">
                    <AnimatePresence>
                        {isPresent && (
                            <>
                                <motion.hgroup 
                                    className="absolute text-neutral-100 left-10 md:left-44 top-44 md:top-72 text-4xl md:text-6xl leading-tight p-0 m-0"
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
                <video
                autoPlay
                loop
                muted
                className='w-full max-md:hidden md:scale-125'
                >
                    <source src="pexels_videos_2325093.mp4" type="video/mp4" />
                    {/* Add other source tags for different video formats if necessary */}
                    Your browser does not support the video tag.
                </video>
            </div>
            <AnimatedComponent>
                <AboutMe t={t}/>
            </AnimatedComponent>
            <AnimatedComponent>
                <Services  data={initservice.data}/>
            </AnimatedComponent>
            <AnimatedComponent>
                <HirePeople />
            </AnimatedComponent>
            <AnimatedComponent>
                <Tools t={t} />
            </AnimatedComponent>
            <AnimatedComponent>
                <Demo t={t}/>
            </AnimatedComponent>
        </>
    );
}
