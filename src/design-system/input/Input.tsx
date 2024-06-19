import { InputProps } from "./types";
import "./Input.css";
import React from "react";

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    disabled,
    hintMessage,
    onChange,
    value,
    children
}) => {
    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(e.target.value);
    };
    return type !== "select" ? (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleOnChange}
            value={value}
        />
    ) : (
        <select className="select">{children}</select>
    );
};

export { Input };
