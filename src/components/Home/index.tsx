import * as React from "react";
import Hero from "./Hero";
import Save from "./Save";
import Warranty from "./Warranty";
import About from "./About";
import DownLoad from "./DownLoad";
import ContactUs from "./ContactUs";
import WhatYouDo from "./WhatYouDo";
import NewExplication from "./NewExplication";
import { Head } from "../../Common";
import { useTranslation } from 'react-i18next';
import './style.css';


const Home: React.FC = () => {

    const { t, i18n } = useTranslation('home');

    i18n.changeLanguage('en');

    return (
        <div className="home">
            <Head />
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
