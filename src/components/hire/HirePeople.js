import {faChessKnight, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemButton from "components/button/noirThemButton";
import React, { useEffect, useRef, useState } from "react";

  
export default function HirePeople(){

    return (
    <article className="bg-bg1 py-12 md:px-44 grid grid-cols-1 gap-y-5 md:gap-5">
    <div className="pl-10 md:pl-0">
        <h2 className="mb-8  text-4xl text-primary">want to get hired?</h2>
        <div className=" text-accent text-xl">
           
            <blockquote className="text-accent text-2xl mt-10 leading-10">“My experience with Noir was faultless. Their career guidance and market knowledge were invaluable. They had access to positions no other recruiters did. They were by my side at every stage of the recruitment process and they helped me secure the job of my dreams. Thank you Noir, you have been amazing!”</blockquote>
            <p className="text-primary pt-4" >Carl - .NET Developer</p>
            
        </div> 
    </div>
    {/* <div className=" min-w-full md:min-w-[50%]"> */}
        
        {/* <div className="relative">
            <div className="mt-24">
                <img src="/nith-in-w1N1WmLDyHU-unsplash.png" className=" h-[450px]" />
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="top-0 left-36 md:left-52 absolute text-primary  h-32 w-32"/>
        </div> */}
        
    {/* </div> */}
  </article>
);
}