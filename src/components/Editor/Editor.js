import React, {useEffect, useState} from "react";
import {X} from "react-feather";

import InputControl from "../InputControl/InputControl";

import styles from "./Editor.module.css";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {info} from "autoprefixer";

function Editor(props) {
    const sections = props.sections;
    const information = props.information;

    const parsedItem = JSON.parse(localStorage.getItem('information'));
    //   const [activeSectionKey, setActiveSectionKey] = useState(
    //     Object.keys(sections)[0]
    // );
    const [activeSectionKey, setActiveSectionKey] = useState(() => {
        const parsedItem = localStorage.getItem("activeSectionKey");
        return parsedItem || Object.keys(sections)[0];
    });
    // const [userName, setUserName] = useState(() => {
    //     const savedItem = localStorage.getItem("userName");
    //     const parsedItem = JSON.parse(savedItem);
    // });
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    );

    const [activeInformation, setActiveInformation] = useState(() => {
        // const parsedItem = null;
        return parsedItem !== null ? parsedItem[sections[activeSectionKey]] : information[sections[Object.keys(sections)[0]]];
    });

    const [values, setValues] = useState({});



    const handlePointUpdate = (value, index) => {
        const tempValues = {...values};
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    };

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    required="true"
                    label="Name*"
                    placeholder="Enter your full name"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, name: event.target.value}))
                    }
                />
                <InputControl
                    required="true"
                    label="Title*"
                    value={values.title}
                    placeholder="Enter your work title"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, title: event.target.value}))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email*"
                    required="true"
                    type="email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, email: event.target.value}))
                    }
                />
                <InputControl
                    label="Phone Number*"
                    required="true"
                    type="tel"
                    value={values.phone}
                    placeholder="Enter your phone number"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, phone: event.target.value}))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Website Link"
                    type="url"
                    value={values.website}
                    placeholder="Enter your website link"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, website: event.target.value}))
                    }
                />
                <InputControl
                    label="Linkedin Link"
                    type="url"
                    value={values.linkedin}
                    placeholder="Enter your linkedin profile link"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, linkedin: event.target.value}))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Github Link"
                    type="url"
                    value={values.github}
                    placeholder="Enter your github profile link"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, github: event.target.value}))
                    }
                />
                <InputControl
                    label="Codepen Link"
                    type="url"
                    value={values.codepen}
                    placeholder="Enter your codepen profile link"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, codepen: event.target.value}))
                    }
                />
            </div>
        </div>
    );

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title*"
                    required="true"
                    placeholder="Enter your work title"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, title: event.target.value}))
                    }
                />
                <InputControl
                    label="Company Name*"
                    required="true"
                    placeholder="Enter company name"
                    value={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, companyName: event.target.value}))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Location*"
                    required="true"
                    placeholder="Enter location"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, location: event.target.value}))
                    }
                />
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificationLink}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            certificationLink: event.target.value,
                        }))
                    }
                />

            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date*"
                    required="true"
                    type="date"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, startDate: event.target.value}))
                    }
                />
                <InputControl
                    label="End Date*"
                    required="true"
                    type="date"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, endDate: event.target.value}))
                    }
                />
            </div>

            <div className={styles.column}>
                <label>Enter your work description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );
    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    required="true"
                    label="Title*"
                    value={values.title}
                    placeholder="Enter title of your Project"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, title: event.target.value}))
                    }
                />
            </div>
            <InputControl
                required="true"
                label="Overview*"
                value={values.overview}
                placeholder="Enter basic overview of project"
                onChange={(event) =>
                    setValues((prev) => ({...prev, overview: event.target.value}))
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    type="url"
                    value={values.link}
                    placeholder="Enter deployed link of project"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, link: event.target.value}))
                    }
                />
                <InputControl
                    label="Github Link"
                    type="url"
                    value={values.github}
                    placeholder="Enter github link of project"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, github: event.target.value}))
                    }
                />
            </div>
            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl
                    required="true"
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );
    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    required="true"
                    label="Title*"
                    value={values.title}
                    placeholder="Enter title eg. SSLC / PUC / B-tech"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, title: event.target.value}))
                    }
                />
            </div>
            <InputControl
                required="true"
                label="College / School Name *"
                value={values.college}
                placeholder="Enter name of your college/school"
                onChange={(event) =>
                    setValues((prev) => ({...prev, college: event.target.value}))
                }
            />
            <div className={styles.row}>
                <InputControl
                    required="true"
                    label="Start Date*"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, startDate: event.target.value}))
                    }
                />
                <InputControl
                    required="true"
                    label="End Date*"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({...prev, endDate: event.target.value}))
                    }
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your Achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
                <InputControl
                    placeholder="Line 5"
                    value={values.points ? values.points[4] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 4)}
                />
                <InputControl
                    placeholder="Line 6"
                    value={values.points ? values.points[5] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 5)}
                />
                <InputControl
                    placeholder="Line 7"
                    value={values.points ? values.points[6] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 6)}
                />
                <InputControl
                    placeholder="Line 8"
                    value={values.points ? values.points[7] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 7)}
                />
                <InputControl
                    placeholder="Line 9"
                    value={values.points ? values.points[8] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 8)}
                />
                <InputControl
                    placeholder="Line 10"
                    value={values.points ? values.points[9] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 9)}
                />
            </div>
        </div>
    );
    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your objective / summary"
                onChange={(event) =>
                    setValues((prev) => ({...prev, summary: event.target.value}))
                }
            />
        </div>
    );
    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                value={values.other}
                placeholder="Enter something"
                onChange={(event) =>
                    setValues((prev) => ({...prev, other: event.target.value}))
                }
            />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    };

    function isUrl(url) {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(url);
    }

    const handleApply = () => {
        // Object.getOwnPropertyNames(sections).map(key => {
        // selected is activeSectionKey
        // eslint-disable-next-line default-case
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    website: values.website,
                    linkedin: values.linkedin,
                    github: values.github,
                    codepen: values.codepen,
                    email: values.email,
                    phone: values.phone,
                };
                if (!tempDetail.name || !tempDetail.title || !tempDetail.email || !tempDetail.phone) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                if (!tempDetail.email.match(/.+@.+\..+/)){
                    setError('Please enter a valid email address ');
                    setMessageColor('red');
                    return false;
                }
                if (!tempDetail.phone.slice(1).match(/^[0-9]+$/)){
                    setError('Please enter a valid phone number');
                    setMessageColor('red');
                    return false;
                }
                if ((tempDetail.github && !isUrl(tempDetail.github)) || (tempDetail.codepen && !isUrl(tempDetail.codepen)) || (tempDetail.linkedin && !isUrl(tempDetail.linkedin)) || (tempDetail.website && !isUrl(tempDetail.website))){
                    setError('Please enter valid links');
                    setMessageColor('red');
                    return false;
                }

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    }
                }));
                setError('');
                return true;
            }
            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                };
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                if (!tempDetail.title || !tempDetail.startDate || !tempDetail.companyName || !tempDetail.location) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                if (tempDetail.certificationLink && !isUrl(tempDetail.certificationLink)){
                    setError('Please enter valid certification link');
                    setMessageColor('red');
                    return false;
                }

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                };
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                if (!tempDetail.title || !tempDetail.overview) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                if ((tempDetail.link && !isUrl(tempDetail.link)) || (tempDetail.github && !isUrl(tempDetail.github))){
                    setError('Please enter valid links');
                    setMessageColor('red');
                    return false;
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                if (!tempDetail.title || !tempDetail.college || !tempDetail.startDate) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            case sections.achievement: {
                const tempPoints = values.points;
                if (!tempPoints) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.achievement]: {
                        ...prev[sections.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            case sections.summary: {
                const tempDetail = values.summary;
                if (!tempDetail) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            case sections.other: {
                const tempDetail = values.other;
                if (!tempDetail) {
                    setError('Please fill out the required fields');
                    setMessageColor('red');
                    return false;
                }
                props.setInformation((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                setError('');
                return true;
            }
            default:
                break;
        }
    };

    const handleSubmission = (e) => {
        let a = handleApply();
        if (a){
            localStorage.setItem('information', JSON.stringify(props));
            setError('Information has been saved.')
            setMessageColor('green')
        }
        else{
            e.preventDefault();
        }
    };

    const handleAddNew = () => {
        const details = activeInformation?.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({});

        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex(details?.length - 1);
    };

    const handleDeleteDetail = (index) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";
        if (!details) return;
        details.splice(index, 1);
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));

        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };

    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",

            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ""
                : "",

            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",

            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ""
                : "",

            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : "",

            college: activeInfo?.details
                ? activeInfo.details[0]?.college || ""
                : "",

            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : "",

            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : "",

            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",

            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",

            website: activeInfo?.detail?.website || "",

            linkedin: activeInfo?.detail?.linkedin || "",

            codepen: activeInfo?.detail?.codepen || "",

            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || "",

            phone: activeInfo?.detail?.phone || "",

            email: activeInfo?.detail?.email || "",

            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",

            other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        });
        localStorage.setItem('activeSectionKey', activeSectionKey);

    }, [activeSectionKey]);

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);


    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) return;

        const activeInfo = information[sections[activeSectionKey]];
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            link: activeInfo.details[activeDetailIndex]?.link || "",
            certificationLink:
                activeInfo.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            website: activeInfo.details[activeDetailIndex]?.website || "",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            codepen: activeInfo.details[activeDetailIndex]?.codepen || "",
            college: activeInfo.details[activeDetailIndex]?.college || "",
        });
    }, [activeDetailIndex]);

    const [error, setError] = useState('');

    const [messageColor, setMessageColor] = useState('red');

    useEffect(() =>
        {
            // basicInfo
            setValues((prev) => ({...prev, name: parsedItem?.information[sections.basicInfo]?.detail?.name}));
            setValues((prev) => ({...prev, title: parsedItem?.information[sections.basicInfo]?.detail?.title}));
            setValues((prev) => ({...prev, website: parsedItem?.information[sections.basicInfo]?.detail?.website}));
            setValues((prev) => ({...prev, linkedin: parsedItem?.information[sections.basicInfo]?.detail?.linkedin}));
            setValues((prev) => ({...prev, github: parsedItem?.information[sections.basicInfo]?.detail?.github}));
            setValues((prev) => ({...prev, codepen: parsedItem?.information[sections.basicInfo]?.detail?.codepen}));
            setValues((prev) => ({...prev, phone: parsedItem?.information[sections.basicInfo]?.detail?.phone}));
            setValues((prev) => ({...prev, email: parsedItem?.information[sections.basicInfo]?.detail?.email}));
        }, []

    );

    const handleClear = () =>{
        if (Object.values(values).every(x => x === null || x === '')){
            setError('');
            return;
        }
        Object.keys(values).forEach((key) =>
            {
                setValues((prev) => ({...prev, [key]: ''}));
            }
        );
        Object.keys(sections).forEach((key) =>
            {
                props.setInformation((prev) => ({
                    ...prev,
                    [sections[key]]: {
                        ...prev[sections[key]],
                        detail: '',
                    }
                }));
            }
        );
        localStorage.removeItem('information');
        setError('Information has been cleared.');
        setMessageColor('green');
    }

    return (
        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <div className="flex items-center gap-10 bottom-b-1 border-solid">
                {Object.keys(sections)?.map((key) => (
                    <div
                        className={`${"p-2  border-2 au border-solid text-xl	border-transparent cursor-pointer whitespace-nowrap"} ${activeSectionKey === key ? styles.active : ""
                        }`}
                        key={key}
                        onClick={() => {setActiveSectionKey(key); setError('')}}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>

            <div>
                <form>
                    <div className={`${sectionTitle === 'Basic Info' ? "hidden" : ""}`}
                    >
                        <InputControl
                            label="Section Title"
                            required="true"
                            placeholder="Enter section title"
                            value={sectionTitle}
                            onChange={(event) => {
                                setSectionTitle(event.target.value);
                            }
                        }
                        />
                    </div>

                    <div className="relative mb-4 flex flex-wrap items-stretch">
                        {activeInformation?.details
                            ? activeInformation?.details?.map((item, index) => (

                                <button
                                    className="[word-wrap: break-word] my-[2px] mr-1 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px]  bg-emerald-600 border-emerald-600 text-gray-100  px-[12px] py-0 text-[13px] font-normal normal-case leading-loose  shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-emerald-600 dark:bg-emerald-600 dark:text-neutral-200"
                                    // className=" relative flex flex-col bg-emerald-600 border-emerald-600 text-gray-100 px-2 py-2 rounded-lg shadow-lg text-sm "
                                    data-te-close="true"

                                    // className={`${styles.chip} ${activeDetailIndex === index ? styles.active : ""
                                    //   }`}
                                    key={item.title + index}
                                    onClick={() => setActiveDetailIndex(index)}
                                >

                                    <X
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleDeleteDetail(index);
                                        }}
                                    />
                                    <p>
                                        {sections[activeSectionKey]} {index + 1}
                                    </p>
                                </button>
                            ))
                            : ""}
                        {activeInformation?.details &&
                        activeInformation?.details?.length > 0 ? (
                            <div
                                className={`${activeInformation?.details && activeInformation?.details?.length > 0 ? "" : "hidden"} ${"p-1"} }`}
                                onClick={handleAddNew}>
                                <FontAwesomeIcon icon={faPlus} size="xl"/>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    {generateBody()}
                    <br />
                    <p style={{"color": messageColor}}>{error}</p>
                    <br />

                    <div className="p-2">
                        <button className="bg-emerald-600 text-gray-100  px-3 py-2 mx-2 rounded-lg shadow-lg text-sm"
                                type="button" onClick={handleSubmission}>Save
                        </button>
                        <button className="bg-yellow-500 text-gray-100  px-3 py-2 mx-2 rounded-lg shadow-lg text-sm"
                                type="button" onClick={handleClear}>Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editor;
