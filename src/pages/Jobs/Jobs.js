import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ data }) => {
  return (
    <article className="text-center py-12 mx-8">
      <h2 className="text-3xl font-bold mb-8">Explore Job Opportunities</h2>
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
