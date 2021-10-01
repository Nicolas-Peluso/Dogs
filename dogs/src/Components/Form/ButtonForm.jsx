import React from 'react';
import Style from "./ButtonForm.module.css";

function ButtonForm({ children, load, ...props }) {
    return (
        <button className={Style.button} {...props}>
            {children}
        </button>
    )
}

export default ButtonForm
