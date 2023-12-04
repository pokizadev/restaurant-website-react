import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Welcome } from "./sections/welcome/Welcome";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Welcome />
        </>
    );
};

export { Home };
