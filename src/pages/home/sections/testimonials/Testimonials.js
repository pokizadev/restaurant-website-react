import "./Testimonials.css";
import { customers } from "./data";

const Testimonial = (props) => {
    return (
        <div className="testimonials-section__testimonial" key={idx}>
        <img src={props.img} alt={props.name} />
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
        <p>{props.text}</p>
    </div>
    )
}

const Testimonials = () => {
    return (
        <section id="testimonials-section">
            <div className="sections-container testimonials-section__container">
                <h2>What Customers Say</h2>
                <div className="testimonials-section__testimonials">
                    {customers.map((customer, idx) => {
                        return (
                           <Testimonial
                            key={idx}
                            name={customer.name}
                            img={customer.img}
                            position={customer.position}
                            text={customer.text}
                           />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
