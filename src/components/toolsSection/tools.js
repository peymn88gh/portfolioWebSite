import React from "react";
import { Link } from "react-router-dom";

export default function Tools({t}){
    return(
        <article className="bg-bg1 grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <img src="aboutmeEDIT.jpg" />
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
                    <Link to={"https://react.dev/learn" } target="_blank"><img alt="react logo"  className="md:p-3" src="/logo192.png"/></Link>
                    <Link to={"https://tailwindcss.com/docs/installation" } target="_blank"><img alt="tailwind css logo"  className="md:p-3" src="/tailwind-css-svgrepo-com.svg"/></Link>
                    <Link to={"https://javascript.info/" } target="_blank"><img alt="javascript logo"  className="md:p-3" src="/javascript-js-seeklogo.com.svg"/></Link>
                    <Link to={"https://docs.strapi.io/dev-docs/quick-start" } target="_blank"><img alt="strapi logo" className="md:p-3" src="/Strapi.monogram.logo.svg"/></Link>
                </div>
            </div>
        </article>
    );
}