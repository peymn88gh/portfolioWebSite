import React from "react";
import { Link } from "react-router-dom";
import data from 'data/jobs.json';

const LatestJobs = () => {
  
  return (
    <article className="py-12 bg-accent">
      <h2 className="mb-8 ml-14 font-bebas text-4xl text-black">Our Latest Jobes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-14">
        {data.jobs.slice(0,3).map((job) => (
            <Link
            key={job.id}
            // to={`/jobs/${job.id}`}
            className="hover:scale-105 transition duration-300 ease-in-out"
            >
            <section className="relative bg-white h-[400px] font-sans p-6 rounded-lg shadow-md border-2 border-opacity-10 border-slate-300">
                
                <h3 className="text-xl mb-2">{job.role}</h3>
                <p className="text-gray-600 mb-2">{job.agileTeamRelated}</p>
                <p className="mb-2">{job.skill}</p>
                <p className="text-gray-600 mb-2 line-clamp-5">{job.description}</p>
                <button className="absolute bottom-10 left-14 mt-4 bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded-full focus:outline-none ">
                Apply
                </button>
            </section>
            </Link>
        ))}
        </div>
    </article>
  );
};

export default LatestJobs;
// {
//     "id" : "0",
//     "img" : "/examplefreepic.jpg",
//     "role" : "Linux Engineer (Caas)",
//     "agileTeamRelated" : "Linux Engineer",
//     "skill" :  "Senior ICT System Engineer",
//     "description" : "Lösungsarchitekturen und -konzepte für eine hochsichere, hochverfügbare und automatisierte Private Cloud entwickeln Konzeption und Implementation einer automatisierten Serverplattform, basierend Kubernetes. Implementierung und Automatisierung der CaaS Umgebung mit Scripting und/oder Ansible ",
//     "mustHave" : "Erfahrung Kubernetes in Konzeption, der Implementierung, dem Unterhalt sowie Weiterentwicklung (Automatisierung) der Client-/Server-Infrastruktur Kenntnisse in der Automatisierung mittels Scripting Umfangreiches Fachwissen in den Technologien von Kubernetes Ausgeprägte soziale Fähigkeiten im Umgang mit Kunden sowie Umsetzungsorientiertheit Einwandfreier Leumund ",
//     "niceToHave" : "Kenntnisse der folgenden Technologien: Filebeat, Kibana, Grafana, Prometheus, OpenShift Kenntnisse im Erstellen von Ansible Playbooks Mehrjährige Erfahrung mit Orchestrierung Erfahrung im Erstellen von Detailstudien und -konzepten sowie UML Modellierung für komplexe, verteilte Systemlandschaften Kommunikative, überzeugende, engagierte und ausdauernde Persönlichkeit "
// },