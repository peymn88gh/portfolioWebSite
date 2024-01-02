import React from "react";

const AboutMe = ({t}) => {
  
  return (
    <article className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-7">
      <div className=" flex flex-col row-span-2">
        <h2 className="text-3xl text-black font-poppins font-bold mb-3 ">{t('aboutMe.greeting')}</h2>
        <p className=" leading-7">
          {t('aboutMe.description')}
        </p>
      </div>
      <div className=" flex flex-col">
        <h2 className="text-base text-primary mb-3 font-extrabold">{t('aboutMe.workExpA.fromTo')}</h2>
        <h3 className=" text-base font-bold mb-2 text-black ">
          {t('aboutMe.workExpA.title')}
        </h3>
        <h4 className=" text-base text-accent ">
          {t('aboutMe.workExpA.description')}
        </h4>
      </div>
      <div className=" flex flex-col">
        <h2 className="text-base text-primary mb-3 font-extrabold">{t('aboutMe.workExpB.fromTo')}</h2>
        <h3 className=" text-base font-bold mb-2 text-black ">
          {t('aboutMe.workExpB.title')}
        </h3>
        <h4 className=" text-base text-accent ">
          {t('aboutMe.workExpB.description')}
        </h4>
      </div>
      <div className=" flex flex-col">
        <h2 className="text-base text-primary mb-3 font-extrabold">{t('aboutMe.workExpC.fromTo')}</h2>
        <h3 className=" text-base font-bold mb-2 text-black ">
          {t('aboutMe.workExpC.title')}
        </h3>
        <h4 className=" text-base text-accent ">
          {t('aboutMe.workExpC.description')}
        </h4>
      </div>
      <div className=" flex flex-col">
        <h2 className="text-base text-primary mb-3 font-extrabold">{t('aboutMe.workExpD.fromTo')}</h2>
        <h3 className=" text-base font-bold mb-2 text-black ">
          {t('aboutMe.workExpD.title')}
        </h3>
        <h4 className=" text-base text-accent ">
          {t('aboutMe.workExpD.description')}
        </h4>
      </div>
      
    </article>
  );
};

export default AboutMe;
