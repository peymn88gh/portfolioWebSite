import React from "react";

export default function ThemButton({children, ...props}){
    return(
        <button {...props} className=" bg-primary border-2 border-transparent hover:border-white text-sm text-white px-4 py-3 md:px-10 md:py-4 hover:bg-secondary duration-150">
            {children}
        </button>
    )
}