import { Outlet } from "react-router-dom";
import { Footer } from "./pages/home/sections/footer/Footer";
import { TopNavigation } from "./pages/home/sections/top-navigation/TopNavigation";

const App = () => {
    return (
        <>
            <TopNavigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
