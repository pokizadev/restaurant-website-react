import React from "react"

export type ButtonSize = "sm" | "md" | "lg" 
export type ButtonColor = "green" | "orange" | "black" | "gray" | "white"


export type ButtonProps = {
    size?: ButtonSize
    color?: ButtonColor
    children?: React.ReactNode
    onClick?: () => void;
}