import { Routes, Route } from "react-router-dom";

import App from "../App";

import { Home } from "../pages/home/Home";
import { Menu } from "../pages/home/sections/menu/Menu";
import { Reservation } from "../pages/home/sections/reservation/Reservation";
import { AboutUs } from "../pages/about-us/AboutUs";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about-us" element={<AboutUs/>} />
                <Route path="reservation" element={<Reservation />} />
            </Route>
        </Routes>
    );
};

export default Router;
