import React, { useState } from "react";
import Hero from "./Hero";
import Save from "./Save";
import Warranty from "./Warranty";
import About from "./About";
import DownLoad from "./DownLoad";
import ContactUs from "./ContactUs";
import WhatYouDo from "./WhatYouDo";
import NewExplication from "./NewExplication";
import { Head, Footer } from "../../Common";
import { ModalSelectLanguage } from "../../Common";
import { useTranslation } from 'react-i18next';
import './style.css';


const Home: React.FC = () => {

    const { t, i18n } = useTranslation('home');

    const [open, setOpen] = useState(false);

    const [languageSelected, setLanguageSelected] = useState('en');

    const handleChangeLanguage = (lg: any) => {
        setLanguageSelected(lg.key);
        i18n.changeLanguage(lg.key);
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div className="home">
            <Head
                handleOpen={handleOpen} languageSelected={languageSelected}
            />
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
            <Footer />

            <ModalSelectLanguage
                open={open}
                setLanguage={handleChangeLanguage}
            />
        </div>

    )
}

export default Home;
