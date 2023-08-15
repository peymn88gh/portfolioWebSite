import React from "react";
import data from 'data/jobs.json';
import { useParams } from "react-router-dom";
import Contact from "pages/Contact";

const JobDetail = () => {
  const {jobId} = useParams()
  const job = data.jobs.find((obj)=>obj.id===jobId)

  return (
    <article className="py-12 px-8">
      <h2 className="text-3xl font-bold mb-4">{job.role}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={job.img}
            alt={job.role}
            className="h-60 w-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-600 mb-6">{job.description}</p>

          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <p className="text-gray-600 mb-6">
            <strong>Must Have:</strong> {job.mustHave}
          </p>
          <p className="text-gray-600">
            <strong>Nice to Have:</strong> {job.niceToHave}
          </p>
        </div>
      </div>
      <Contact applyInfo={job}/>
    </article>
  );
};

export default JobDetail;