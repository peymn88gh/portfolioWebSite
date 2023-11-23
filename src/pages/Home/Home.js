import React, { useEffect, useRef } from 'react';

import { Element, animateScroll } from 'react-scroll';
import './Home.css';
import Services from 'components/Services/Services';
import initservice from "data/services.json";


import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

export default function Home(){
    const isPresent = useIsPresent()

    
function handleScrollToBottom(){
    animateScroll.scrollTo(1000);
}
function handleScrollToTop(){
    animateScroll.scrollToTop()
}

useEffect(()=>{
    if(window.location.hash==='#services') {scroll.scrollTo(600)}
    
},[])
const variants = {
    initial: { opacity: 0, x: -50 }, // Initial state (hidden to the left)
    animate: { opacity: 1, x: 0 }, // Animation when appearing (moves in from the left)
  };
    return (
        <>
            <div className=" h-screen w-screen relative overflow-hidden">
                <div className=" absolute bg-secondary bg-opacity-80 w-screen h-screen flex-col">
                    <AnimatePresence>
                        {isPresent && (
                        <motion.hgroup 
                            className="absolute text-neutral-100 left-20 top-44 text-4xl md:text-5xl font-bebas uppercase leading-none p-0 m-0"
                            initial="initial"
                            animate="animate"
                            variants={variants}
                            transition={{ duration: 0.75 }}
                        >
                            <h1>
                                Microsoft <br /> talent <br />{' '}
                                <p className="text-primary">solutions</p>
                            </h1>
                        </motion.hgroup>
                        )}
                    </AnimatePresence>
                </div>
                <video
                autoPlay
                loop
                muted
                className='w-full'
                >
                    <source src="pexels_videos_2325093.mp4" type="video/mp4" />
                    {/* Add other source tags for different video formats if necessary */}
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <LatestJobs /> */}
            <Services  data={initservice.data}/>
        </>
    );
}
