import { FC } from "react";
import { ButtonProps } from "./types";
import "./Button.css"

const sizeClassNames = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large",
};

const colorClassNames = {
    green: "btn-green",
    orange: "btn-orange",
    black: "btn-black",
    gray: "btn-gray",
    white: "btn-white"
}

export const Button: FC<ButtonProps> = (props) => {
    const {size, color, className, children, onClick} = props;
    
    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";


    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const finalClassNames = `btn ${colorClassName} ${sizeClassName} ${className || ""}`;
    
    return (
        <button 
        onClick={onClick}
        className={finalClassNames}>{children}
        </button>
    );
};
