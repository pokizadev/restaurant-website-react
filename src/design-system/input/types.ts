import React from "react";

export type InputType = "text" | "email" | "password" | "tel" | "textarea" | "select";


export type InputProps = {
    className?: string;
    type?: InputType;
    placeholder?: string;
    disabled?: boolean;
    hintMessage?: string;

    onChange: (value: string) => void;
    value: string;
    children?: React.ReactNode
};