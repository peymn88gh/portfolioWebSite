import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ data }) => {
  return (
    <article className=" py-20 mt-8 px-8">
      <h1 className="text-4xl pl-6 mb-8 text-accent">Explore Job Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((job) => (
            <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="hover:shadow-lg transition duration-300 ease-in-out"
            >
            <section className="bg-white p-6 rounded-lg shadow-md">
                <img
                src={job.img}
                alt={job.role}
                className="h-24 w-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                <p className="text-gray-600">{job.agileTeamRelated}</p>
                <button className="mt-4 bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
                Apply
                </button>
            </section>
            </Link>
        ))}
        </div>
    </article>
  );
};

export default Jobs;
