import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faInfo, faUsers, faLock, faUserShield, faToggleOn, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import DynamicFormSection from "components/form/DynamicFormSection";

export default function BookingService(){
    const userFieldsWithCalendar = [
    {
        name: "firstName",
        key: "firstName",
        type: "text",
        label: "First Name",
        col: "md:w-1/2",
        icon: <FontAwesomeIcon icon={faUser} />, // User icon
        placeholder: "Enter first name",
        validation: yup.string().required("First name is required"),
    },
    {
        name: "lastName",
        key: "lastName",
        type: "text",
        label: "Last Name",
        icon: <FontAwesomeIcon icon={faUser} />, // User icon
        placeholder: "Enter last name",
        col: "md:w-1/2",
        validation: yup.string().required("Last name is required"),
    },
    // {
    //     name: "userName",
    //     key: "userName",
    //     type: "text",
    //     label: "User Name",
    //     icon: <FontAwesomeIcon icon={faUser} />, // User icon
    //     col: "md:w-1/2",
    //     placeholder: "Enter user name",
    //     validation: yup.string().required("User name is required"),
    // },
    {
        name: "eMail",
        key: "eMail",
        type: "text",
        label: "Email",
        icon: <FontAwesomeIcon icon={faEnvelope} />, // Envelope icon
        col: "md:w-1/2",
        placeholder: "Enter email",
        validation: yup.string().email("Invalid email format").required("Email is required"),
    },
    {
        name: "description",
        key: "description",
        type: "text",
        label: "Description",
        icon: <FontAwesomeIcon icon={faInfo} />, // Info icon
        col: "md:w-1/2",
        placeholder: "Enter description",
        validation: yup.string(),
    },
    {
        name: "bookingDate",
        key: "bookingDate",
        type: "date",
        label: "Booking Date",
        icon: <FontAwesomeIcon icon={faCalendarAlt} />, // Calendar icon
        col: "md:w-1/2",
        placeholder: "Select booking date",
        validation: yup.date().required("Booking date is required"),
    },
    // {
    //     name: "bookingTime",
    //     key: "bookingTime",
    //     type: "time",
    //     label: "Booking Time",
    //     icon: <FontAwesomeIcon icon={faClock} />, // Clock icon
    //     col: "md:w-1/2",
    //     placeholder: "Select booking time",
    //     validation: yup.string().required("Booking time is required"),
    // },
    ];

        return (
            <section className="bg-accent flex flex-col h-full pt-28">
              <div className="max-w-2xl mx-auto px-6">
                <div className="mb-8">
                  <p className="text-4xl font-bold mb-4">Step into a world of innovation and expertise</p>
                  <p className="text-lg italic mb-4">where your vision meets our craftsmanship.</p>
                  <p className="text-lg mb-4">
                    Our service is more than just a solution; it's a journey tailored for you. Picture this: seamless execution,
                    unparalleled quality. Embrace efficiency; let us pave the way for your success. We're not just about meeting
                    expectations; we're about exceeding them. Discover the difference experience makes. Unleash possibilities
                    as we transform your ideas into reality. Join countless others who've entrusted their dreams to us. Reserve
                    your spot today and witness your aspirations unfold effortlessly. Your success story starts here – embrace
                    the extraordinary.
                  </p>
                </div>
                <div>
                  <DynamicFormSection 
                  showActionButtons={false} 
                  formFields={userFieldsWithCalendar} 
                //   externalActionButtons={}
                  />
                </div>
              </div>
            </section>
          );
        
}


