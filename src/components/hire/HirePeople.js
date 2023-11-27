import {faChessKnight, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemButton from "components/button/noirThemButton";
import React, { useEffect, useRef, useState } from "react";

  
export default function HirePeople(){

    return (
    <article className="bg-secondary py-12 flex flex-row">
    <div>
        <h2 className="mb-8 ml-14 font-bebas text-4xl text-primary">want to get hired?</h2>
        <div className=" text-accent text-xl pl-14">
            <p className="py-10">
            Noir is the leading Microsoft recruitment agency; we can help you make the right career decisions.
            </p>
            <p className="py-10">
            Whether you are looking for a permanent or contract role, Noirs extensive recruitment expertise can guarantee you receive a sophisticated, thorough and rewarding experience.
            </p>
            <p className="py-10">
            Our international operations mean we are able provide you with the best platform to explore every opportunity within your chosen area of expertise.
            </p>
            <ThemButton>find out more</ThemButton>
            <h2 className=" font-bebas uppercase text-primary text-3xl mt-28">we are highly rated</h2>
            <blockquote className="text-accent text-2xl mt-10 leading-10">“My experience with Noir was faultless. Their career guidance and market knowledge were invaluable. They had access to positions no other recruiters did. They were by my side at every stage of the recruitment process and they helped me secure the job of my dreams. Thank you Noir, you have been amazing!”</blockquote>
            <p className="text-primary pt-4" >Carl - .NET Developer</p>
            
        </div> 
    </div>
    <div className="flex flex-col gap-20 min-w-[45%]">
        <div className="flex flex-row min-w-[90%]">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary">
                <FontAwesomeIcon icon={faChessKnight} className=" text-black  h-14 w-14"/>
            </div>
            <div className="text-accent  ml-10">
                <h3 className=" text-3xl font-bebas mb-5">
                    exclusive clients
                </h3>
                <p>
                Noir have exclusive relationships with<br /> some of the best companies in the word.
                </p>
            </div>
            
        </div>
        <div className="flex flex-row min-w-[90%]">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary">
                <FontAwesomeIcon icon={faChessKnight} className=" text-black  h-14 w-14"/>
            </div>
            <div className="text-accent  ml-10">
                <h3 className=" text-3xl font-bebas mb-5">
                    exclusive clients
                </h3>
                <p>
                Noir have exclusive relationships with<br /> some of the best companies in the word.
                </p>
            </div>
            
        </div>
        <div className="flex flex-row min-w-[90%]">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary">
                <FontAwesomeIcon icon={faChessKnight} className=" text-black  h-14 w-14"/>
            </div>
            <div className="text-accent  ml-10">
                <h3 className=" text-3xl font-bebas mb-5">
                    exclusive clients
                </h3>
                <p>
                Noir have exclusive relationships with<br /> some of the best companies in the word.
                </p>
            </div>
            
        </div>
        <div className="relative">
            <div className="mt-24">
                <img src="/nith-in-w1N1WmLDyHU-unsplash.png" className=" h-[450px] w-[700px]" />
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="top-0 left-60 absolute text-primary  h-32 w-32"/>
        </div>
        
    </div>
  </article>
);
}