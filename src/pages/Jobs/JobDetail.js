import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Contact from "pages/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

const JobDetail = () => {
  const {jobId} = useParams()


    const [t] = useTranslation('jobs');
// console.log(window.history);

  
  return (
    <article className="py-12 px-8">
      <div className="mb-4">
        <Link
        // to={window.history.back}
          onClick={()=>window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-800 transition ease-in-out"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" />
          Back
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-4">{t(`${jobId}.role`)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={t(`${jobId}.img`)}
            alt={t(`${jobId}.role`)}
            className="h-60 w-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-600 mb-6">{t(`${jobId}.description`)}</p>

          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <p className="text-gray-600 mb-6">
            <strong>Must Have:</strong> {t(`${jobId}.mustHave`)}
          </p>
          <p className="text-gray-600">
            <strong>Nice to Have:</strong> {t(`${jobId}.niceToHave`)}
          </p>
        </div>
      </div>
      <Contact applyInfo={t(jobId)}/>
    </article>
  );
};

export default JobDetail;