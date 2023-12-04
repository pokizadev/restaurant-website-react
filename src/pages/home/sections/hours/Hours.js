import "./Hours.css";

const Hours = () => {
    return (
        <section id="hours-section">
            <div className="sections-container hours-section__container">
                <div className="hours-section__background">
                    <div className="hours-section__hours">
                        <h2>We are open from</h2>
                        <h3>Monday-Sunday</h3>
                        <div className="hours-section__lunch-dinner">
                            <p>Lunch : Mon-Sun : 11:00am-02:00pm</p>
                            <p>Dinner : Sunday : 04:00pm-08:00pm</p>
                            <p>04:00pm-09:00pm</p>
                        </div>
                        <button className="btn btn-lg btn-orange">Order Now</button>
                        <button className="btn btn-lg btn-white">
                            Reservation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hours };
