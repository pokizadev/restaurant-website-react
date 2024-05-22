import { links } from "./TopNavigation";
import "./MobileNavigation.css"
import closeIcon from "../../../../assets/close (2).png"

const MobileNavigation = () => {
    return (
        <div className="mobile-nav__content">
            <div className="mobile-nav__top">
                <p className="title">Welcome</p>
                <img className="close-icon" src={closeIcon} alt="close icon"/>
            </div>
            <div className="mobile-nav__links">
                <ul className="links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export { MobileNavigation };
