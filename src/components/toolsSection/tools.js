import React from "react";
import { Link } from "react-router-dom";

export default function Tools({t}){
    return(
        <article className="bg-bg1 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
                <img src="aboutmewide2.jpeg" />
            </div>
                
            <div className="relative text-start md:max-w-[85%] flex flex-col gap-y-5 md:gap-5">
                <div>
                    <h2  className="text-3xl text-black font-display mb-3 font-extrabold">{t('toolsSection.motto')}</h2>
                    <p className=" text-lg text-accent">
                        {t('toolsSection.description')}
                    </p>
                </div>
                <div>
                    <h2  className="text-3xl text-black font-display mb-3 ">{t('toolsSection.toolsTitle')}</h2>
                    <p className=" text-lg text-accent mb-8">
                        {t('toolsSection.tDescription')}
                    </p> 
                </div>
                <div className=" flex flex-row">
                    <Link to={"https://react.dev/learn" } target="_blank">
                        <img className="p-3 w-20" alt="react logo"    src="/logo1922.png"/></Link>
                    <Link to={"https://tailwindcss.com/docs/installation" } target="_blank">
                        <img className="p-3 w-20"  alt="tailwind css logo" src="/tailwind-css-svgrepo-com.svg"/></Link>
                    <Link to={"https://javascript.info/" } target="_blank">
                        <img className="p-3 w-20"  alt="javascript logo" src="/javascript-js-seeklogo.com.svg"/></Link>
                    <Link to={"https://docs.strapi.io/dev-docs/quick-start" } target="_blank">
                        <img className="p-3 w-20"  alt="strapi logo" src="/Strapi.monogram.logo.svg"/></Link>
                </div>
            </div>
        </article>
    );
}