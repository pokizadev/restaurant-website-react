import "./Testimonials.css";
import { customers } from "./data";

const Testimonials = () => {
    return (
        <section id="testimonials-section">
            <div className="sections-container testimonials-section__container">
                <h2>What Customers Say</h2>
                <div className="testimonials-section__testimonials">
                    {customers.map((customer, idx) => {
                        return (
                            <div className="testimonials-section__testimonial">
                                <img src={customer.img} alt={customer.name} />
                                <h4>{customer.name}</h4>
                                <h5>{customer.position}</h5>
                                <p>{customer.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
