import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCogs, faDesktop, faDiamond, faMobile, faMobileAlt, faMobilePhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const {t} = useTranslation('common')
  const navigateToFiverr = () => {
    window.open('https://www.fiverr.com/peyman_gh?public_mode=true', '_blank');
  };
  return (
    <article className="">
      <h2  className="text-3xl text-black font-display mb-5 font-bold">{t('serviceSection.title')}</h2>
      <p className=" text-start mb-10 leading-7">
      {t('serviceSection.description')}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <section
            onClick={navigateToFiverr}
            className="bg-white text-start p-6 rounded-none border border-accent border-opacity-25 hover:shadow-md hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-24 w-24 mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceA.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceA.description')}</p>
            
          </section>
          <section
            onClick={navigateToFiverr}
            className="bg-white text-start p-6 rounded-none border border-accent border-opacity-25 hover:shadow-md hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faDesktop}
              className="h-24 w-24 mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceB.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceB.description')}</p>
            
          </section>
          <section
            onClick={navigateToFiverr}
            className="bg-white text-start p-6 rounded-none border border-accent border-opacity-25 hover:shadow-md hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCogs}
              className="h-24 w-24 mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceC.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceC.description')}</p>
            
          </section>
          <section
            onClick={navigateToFiverr}
            className="bg-white text-start p-6 rounded-none border border-accent border-opacity-25 hover:shadow-md hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="h-24 w-24 mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceD.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceD.description')}</p>
            
          </section>
          <section
            onClick={navigateToFiverr}
            className="bg-white text-start p-6 rounded-none border border-accent border-opacity-25 hover:shadow-md hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="h-24 w-24 mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceE.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceE.description')}</p>
            
          </section>
      </div>
    </article>
  );
};

export default Services;
