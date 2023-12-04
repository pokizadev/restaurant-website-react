import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Welcome } from "./sections/welcome/Welcome";
import { Menu } from "./sections/menu/Menu";
import { Reservation } from "./sections/reservation/Reservation";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Welcome />
            <Menu />
            <Reservation/>
        </>
    );
};

export { Home };
