import { useState, useEffect } from "react";
import "./Testimonials.css";
import { customers } from "./data";
import leftIcon from "../../../../assets/arrow-back.png";
import rightIcon from "../../../../assets/forward-arrow.png";

const Testimonial = (props) => {
    return (
        <div className="testimonials-section__testimonial">
            <img src={props.img} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
            <p>{props.text}</p>
        </div>
    );
};

const Testimonials = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIdx((prevIdx) => (prevIdx + 1) % customers.length);
    };

    const handlePrev = () => {
        setCurrentIdx(
            (prevIdx) => (prevIdx - 1 + customers.length) % customers.length
        );
    };
    return (
        <section id="testimonials-section">
            <div className="sections-container testimonials-section__container">
                <h2>What Customers Say</h2>
                <div className="testimonials-section__testimonials">
                    {isMobile ? (
                        <Testimonial
                            key={currentIdx}
                            name={customers[currentIdx].name}
                            img={customers[currentIdx].img}
                            position={customers[currentIdx].position}
                            text={customers[currentIdx].text}
                        />
                    ) : (
                        customers.map((customer, idx) => (
                            <Testimonial
                                key={idx}
                                name={customer.name}
                                img={customer.img}
                                position={customer.position}
                                text={customer.text}
                            />
                        ))
                    )}
                </div>
                {isMobile && (
                    <>
                        <img
                            className="icon left"
                            src={leftIcon}
                            alt="previous Icon"
                            onClick={handlePrev}
                        />
                        <img
                            className="icon right"
                            src={rightIcon}
                            alt="next Icon"
                            onClick={handleNext}
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export { Testimonials };
