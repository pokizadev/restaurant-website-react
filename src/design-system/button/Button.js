import "./Button.css"

export const Button = (props) => {
    const {size, color, children, onClick} = props;
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
        <button 
        onClick={onClick}
        className={`btn ${classNames[size]} ${classNames[color]}`}>{children}
        </button>
    );
};
