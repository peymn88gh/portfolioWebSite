import React from "react";

export default function ThemButton({children, ...props}){
    return(
        <button {...props} className=" bg-primary border-2  border-primary rounded-2xl text-accent px-8 py-4 hover:bg-secondary transition-colors duration-150">
            {children}
        </button>
    )
}