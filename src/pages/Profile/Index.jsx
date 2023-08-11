import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { Download } from "react-feather";
import Navbar from "components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

import Editor from "components/Editor/Editor";
import Resume from "components/Resume/Resume";

import styles from "./Profile.module.css";

function UserProfile() {
  const colors = ["#020DF9", "#EA0AF1", "#098913", "#5F5B5B", "#02F5F1", "#F8001E", "#E9EC05", "#641E16"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="w-full">
      <Navbar toggle={sidebarToggle} />
      <div className="mainCard">
        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
          <div className="relative ">
            <p className="absolute top-0 right-14 h-16 w-16 ">
              <ReactToPrint
                  trigger={() => {
                    return (
                        <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                          Download <Download />
                        </button>
                    );
                  }}
                  content={() => resumeRef.current}
              />
            </p>
          </div>
          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
        </div>
      </div>
    </main>


  );
}

export default UserProfile;
