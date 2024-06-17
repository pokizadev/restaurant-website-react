import { Hero } from "./sections/hero/Hero";
import { Welcome } from "./sections/welcome/Welcome";
import { Menu } from "./sections/menu/Menu";
import { Reservation } from "./sections/reservation/Reservation";
import { Chefs } from "./sections/chefs/Chefs";
import { Testimonials } from "./sections/testimonials/Testimonials";
import { Hours } from "./sections/hours/Hours";

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <Menu />
            <Reservation />
            <Chefs />
            <Testimonials />
            <Hours />
        </>
    );
};

export { Home };
