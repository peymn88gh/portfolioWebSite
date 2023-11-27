import ThemButton from "components/button/noirThemButton";
import React from "react";

export default function LatestInsights(){
    return(
        <article className="bg-accent py-12">
            <h2 className="mb-8 ml-14 font-bebas text-4xl text-black uppercase">Latest Insights</h2>
            <div className=" flex flex-row flex-wrap">
                <div className=" h-96 w-full md:w-1/2 p-2 my-10 text-black hover:text-primary cursor-pointer">
                    <img src="/examplefreepic.jpg" className=" h-56 w-full object-cover rounded-lg"/>
                    <h1 className=" font-bebas text-3xl leading-none my-10">Diversity In The Technology World: Celebrating Black History Month In The UK</h1>
                    <ThemButton>read more</ThemButton>

                </div> 
                <div className=" h-96 w-full md:w-1/2 p-2 my-10 text-black hover:text-primary cursor-pointer">
                    <img src="/examplefreepic.jpg" className=" h-56 w-full object-cover rounded-lg"/>
                    <h1 className=" font-bebas text-3xl leading-none my-10">Diversity In The Technology World: Celebrating Black History Month In The UK</h1>
                    <ThemButton>read more</ThemButton>
                </div> 
                <div className=" h-96 w-full md:w-1/2 p-2 my-10 text-black hover:text-primary cursor-pointer">
                    <img src="/examplefreepic.jpg" className=" h-56 w-full object-cover rounded-lg"/>
                    <h1 className=" font-bebas text-3xl leading-none my-10">Diversity In The Technology World: Celebrating Black History Month In The UK</h1>
                    <ThemButton>read more</ThemButton>
                </div> 
                
            </div>
        </article>
    );
}