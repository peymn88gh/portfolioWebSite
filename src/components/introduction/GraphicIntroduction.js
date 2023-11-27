import ThemButton from "components/button/noirThemButton";
import React from "react"

export default function GraphicIntroduction(){
    return(
        <section className=" bg-accent py-10 text-center">
            <hgroup className="text-center leading-none">
                <p className=" font-bebas text-2xl ">we are</p>
                <h1 className=" text-6xl text-primary font-bebas">NOIR</h1>
            </hgroup>
            <div className="flex flex-col md:flex-row pt-10 mb-10 gap-20 font-bebas text-3xl justify-center items-center">
                <hgroup className="text-center">
                    <h1 className=" text-primary">15 years</h1>
                    <h1>in business</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">90%</h1>
                    <h1>Excellence rating</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">2 million</h1>
                    <h1>candidate database</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">1000</h1>
                    <h1>clients</h1>
                </hgroup>
            </div>
            <ThemButton>
                More about us
            </ThemButton>
        </section>
    );
}