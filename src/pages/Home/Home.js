import React from 'react';
import { forwardRef } from 'react';
import { Element, animateScroll } from 'react-scroll';
import './Home.css';
import Services from 'components/Services/Services';
import initservice from "data/services.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Home(){
function handleScrollToBottom(){
    animateScroll.scrollTo(1000);
}
function handleScrollToTop(){
    animateScroll.scrollToTop()
}
    return <>
        <div className="homebackground">
            <div className="content-container">
                <h1 className=' font-bold text-5xl mb-10'>LeoNet Informatik GmbH</h1>
                <button className='rounded-full text-lg bg-red-500 py-2 px-4 m-5 '>
                    LEARN MORE
                </button>
                <button className='rounded-full text-lg bg-red-500 py-2 px-4 '>
                    .NET ENTWICKLUNG
                </button>
            </div>
            <div onClick={handleScrollToBottom} className=" absolute bottom-16 left-1/2 border-2 border-slate-300 rounded-full p-4 mb-4">
                <FontAwesomeIcon icon={faArrowDown} className=' animate-bounce text-slate-300'/>
            </div>

        </div>
        <Element name="services" className="services bg-gray-100 py-10">
           <Services  data={initservice.data}/>
        </Element>

        <div onClick={handleScrollToTop} className=" absolute bottom-14 right-9 border-2 border-slate-500 rounded-full p-4 mb-4">
            <FontAwesomeIcon icon={faArrowUp} className=' animate-bounce text-slate-500'/>
        </div>
    </>
}
