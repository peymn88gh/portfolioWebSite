import React from "react";
import { Link } from "react-router-dom";

export default function Tools({t}){
    return(
        <article className="bg-bg1 grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <img src="/examplefreepic.jpg" />
            </div>
                
            <div className="relative text-start py-12 px-10 md:max-w-[75%] flex flex-col gap-y-5 md:gap-5">
                <div>
                    <h2  className="text-3xl text-black font-display mb-3 font-extrabold">{t('toolsSection.motto')}</h2>
                    <p className=" text-lg text-accent">
                        {t('toolsSection.description')}
                    </p>
                </div>
                <div>
                    <h2  className="text-3xl text-black font-display mb-3 font-extrabold">{t('toolsSection.skillsTitle')}</h2>
                    <p className=" text-lg text-accent">
                        {t('toolsSection.sDescription')}
                    </p>  
                </div>
                <div>
                    <h2  className="text-3xl text-black font-display mb-3 font-extrabold">{t('toolsSection.toolsTitle')}</h2>
                    <p className=" text-lg text-accent mb-8">
                        {t('toolsSection.tDescription')}
                    </p> 
                </div>
                <div className="grid grid-cols-4 grid-rows-1 justify-stretch items-stretch gap-x-5">
                    <Link to={"https://react.dev/learn" } target="_blank"><img className="md:p-3" src="/logo192.png"/></Link>
                    <img className="md:p-3" src="/tailwind-css-seeklogo.com.svg"/>
                    <img className="md:p-3" src="/javascript-js-seeklogo.com.svg"/>
                    <img className="md:p-3" src="/Strapi.monogram.logo.svg"/>
                </div>
            </div>
        </article>
    );
}