import "./Button.css"

export const Button = (props) => {
    const {size, color} = props;
    const classNames = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        green: "btn-green",
        orange: "btn-orange",
        black: "btn-black",
        gray: "btn-gray",
        white: "btn-white"
    }
    return (
        <button className={`btn ${classNames[size]} ${classNames[color]}`}>{props.children}
        </button>
    );
};
