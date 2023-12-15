import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = ({ data }) => {
  const {t} = useTranslation('common')
  const navigate = useNavigate()
  return (
    <article className="bg-white py-20 px-10 md:px-44">
      <h2  className="text-3xl text-black font-display mb-5 font-extrabold">{t('serviceSection.title')}</h2>
      <p className=" text-start mb-10 text-lg">
      Web design and development have been my bread<br /> and butter for more than 5 years. During that time I've discovered <br /> that I can help startups and companies with the following services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <section
            className="bg-white text-justify p-6 rounded-none border border-accent border-opacity-25"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-24 w-24 mx-auto mb-4 rounded-full text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceA.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceA.description')}</p>
            
          </section>
          <section
            className="bg-white text-justify p-6 rounded-none border border-accent border-opacity-25"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-24 w-24 mx-auto mb-4 rounded-full text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceA.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceA.description')}</p>
            
          </section>
          <section
            className="bg-white text-justify p-6 rounded-none border border-accent border-opacity-25"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-24 w-24 mx-auto mb-4 rounded-full text-primary"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">{t('serviceSection.serviceA.title')}</h3>
            <p className="text-gray-600">{t('serviceSection.serviceA.description')}</p>
            
          </section>
      </div>
    </article>
  );
};

export default Services;
