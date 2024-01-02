import React from "react";
import { useTranslation } from "react-i18next";

  
export default function Testimonials(){
    const {t} = useTranslation('common')
    return (
    <article className="grid grid-cols-1">
    <div className="">
        <h2 className="mb-8 text-3xl font-bold text-black">{t('testimonials.title')}</h2>
        <div className=" text-accent text-xl">
           
            <blockquote className="text-accent text-xl ">{`"${t('testimonials.first.praise')}"`}</blockquote>
            <p className="text-primary pt-4" >{t('testimonials.first.name')}</p>
            
        </div>
        <div className=" text-accent text-xl">
           
            <blockquote className="text-accent text-xl mt-10">{`"${t('testimonials.second.praise')}"`}</blockquote>
            <p className="text-primary pt-4" >{t('testimonials.second.name')}</p>
            
        </div>
    </div>
  </article>
);
}