import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Welcome } from "./sections/welcome/Welcome";
import { Menu } from "./sections/menu/Menu";
import { Reservation } from "./sections/reservation/Reservation";
import { Chefs } from "./sections/chefs/Chefs";
import { Testimonials } from "./sections/testimonials/Testimonials";
import { Hours } from "./sections/hours/Hours";
import { Footer } from "./sections/footer/Footer";


const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Welcome />
            <Menu />
            <Reservation/>
            <Chefs/>
            <Testimonials/>
            <Hours/>
            <Footer/>
        </>
    );
};

export { Home };
