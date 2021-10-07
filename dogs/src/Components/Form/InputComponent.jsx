import React from 'react';
import Style from "./InputComponent.module.css";

function InputLoginComponent({ type, value, label, onChange, erro, onBlur }) {

    return (
        <div className={Style.wrapper}>
            <label className={Style.label}>
                {label}
            </label>
            <input type={type} value={value} className={Style.input}
                onChange={onChange} onBlur={onBlur} />
            {erro && <p className={Style.Erro}>{erro}</p>}
        </div>
    )
}

export default InputLoginComponent