import ThemButton from "components/button/noirThemButton";
import React from "react"

export default function GraphicIntroduction({t}){
    return(
        <section className=" bg-accent py-10 text-center">
            <hgroup className="text-center leading-none">
                <p className=" font-bebas text-2xl ">{t('sections.sectionTwo.h1')}</p>
                <h1 className=" text-6xl text-primary font-bebas">{process.env.REACT_APP_NAME}</h1>
            </hgroup>
            <div className="flex flex-col md:flex-row pt-10 mb-10 gap-20 font-bebas text-3xl justify-center items-center">
                <hgroup className="text-center">
                    <h1 className=" text-primary">{t('sections.sectionTwo.h21')}</h1>
                    <h1>{t('sections.sectionTwo.h22')}</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">{t('sections.sectionTwo.h31')}</h1>
                    <h1>{t('sections.sectionTwo.h32')}</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">{t('sections.sectionTwo.h41')}</h1>
                    <h1>{t('sections.sectionTwo.h42')}</h1>
                </hgroup>
                <hgroup className="text-center">
                    <h1 className=" text-primary">{t('sections.sectionTwo.h51')}</h1>
                    <h1>{t('sections.sectionTwo.h52')}</h1>
                </hgroup>
            </div>
            <ThemButton>
            {t('sections.sectionTwo.b1')}
            </ThemButton>
        </section>
    );
}