import { Routes, Route } from "react-router-dom";

import App from "../App";

import { Home } from "../pages/home/Home";
import { Menu } from "../pages/home/sections/menu/Menu";
import { Reservation } from "../pages/home/sections/reservation/Reservation";
import { AboutUs } from "../pages/about-us/AboutUs";
import { Testimonials } from "../pages/home/sections/testimonials/Testimonials";
import { ContactUs } from "../pages/contact-us/ContactUs";
import { SignUp } from "../pages/auth/SignUp";
import { Login } from "../pages/auth/Login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="testimonials" element={<Testimonials />} />
            </Route>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
};

export default Router;
