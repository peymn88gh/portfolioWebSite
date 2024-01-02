import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            className=" bg-primary border-2 border-primary text-sm text-white hover:text-primary focus:text-primary px-4 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 hover:bg-bg1 focus:bg-bg1 duration-150 "
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;