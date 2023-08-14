import React from "react";

const Services = ({ data }) => {
  return (
    <article className="text-center py-12 mx-8">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((service) => (
          <section
            key={service.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={service.img}
              alt={service.imageAlt}
              className="h-24 w-24 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.subtitle}</p>
            <button className="mt-4 bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
              Learn More
            </button>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Services;
