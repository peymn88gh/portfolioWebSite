import React, { useEffect } from 'react';
import { forwardRef } from 'react';
import { Element, animateScroll } from 'react-scroll';
import './Home.css';
import Services from 'components/Services/Services';
import initservice from "data/services.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Home(){
function handleScrollToBottom(){
    animateScroll.scrollTo(1000);
}
function handleScrollToTop(){
    animateScroll.scrollToTop()
}
useEffect(()=>{
    if(window.location.hash==='#services') {scroll.scrollTo(600)}
    
},[])
    return <>
        <div className="homebackground bg-gradient-to-b from-cyan-600 to-cyan-900 overflow-hidden">
            
            <div className="content-container  md:w-1/2 items-center md:mt-28 flex-col p-5 ml-7">
                <h1 className=' font-bold text-neutral-100 text-3xl mb-10'>LeoNet Informatik GmbH</h1>
                <p className=' text-neutral-300 max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                <button className=' bg-slate-300 p-3 rounded-full text-neutral-600 min-w-[100px] mt-12 items-center'><FontAwesomeIcon icon={faPhone} className='mr-2' /> contact us</button>
            </div>
            {/* <div className=' md:min-w-[640px]' /> */}
            <div className=" md:w-1/2 md:h-screen relative " >
                <img src='/portfolio1.png' className='md:min-w-[900px] absolute top-20 left-0 rounded-lg'/>
            </div>
            <div onClick={handleScrollToBottom} className=" cursor-pointer absolute bottom-52 left-1/4 border-2 border-slate-300 rounded-full p-4 mb-4">
                <FontAwesomeIcon icon={faArrowDown} className=' animate-bounce text-slate-300'/>
            </div>
        

        </div>
        <Element name="services" className="services bg-gray-100 py-10">
           <Services  data={initservice.data}/>
        </Element>

        <div onClick={handleScrollToTop} className=" cursor-pointer absolute bottom-14 right-9 border-2 border-slate-500 rounded-full p-4 mb-4">
            <FontAwesomeIcon icon={faArrowUp} className=' animate-bounce text-slate-500'/>
        </div>
    </>
}
