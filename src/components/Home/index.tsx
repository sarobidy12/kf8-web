import * as React from "react";
import Hero from "./Hero";
import Save from "./Save";
import Warranty from "./Warranty";
import About from "./About";
import DownLoad from "./DownLoad";
import ContactUs from "./ContactUs";
import WhatYouDo from "./WhatYouDo";
import NewExplication from "./NewExplication";
import './style.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="root-home">
                <Hero />
            </div>
            <Save />
            <WhatYouDo />
            <NewExplication />
            <About />
            <Warranty />
            <DownLoad />
            <ContactUs />
        </div>

    )
}

export default Home;

