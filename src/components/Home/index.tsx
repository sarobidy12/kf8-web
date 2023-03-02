import React, { useState } from "react";
import Hero from "./Hero";
import Save from "./Save";
import Warranty from "./Warranty";
import About from "./About";
import DownLoad from "./DownLoad";
import ContactUs from "./ContactUs";
import WhatYouDo from "./WhatYouDo";
import NewExplication from "./NewExplication";
import { Layout } from "../../Common";
import './style.css';


const Home: React.FC = () => {

    const [languageSelected, setLanguageSelected] = useState<any>(null);

    return (
        <Layout
            languageSelected={languageSelected}
            setLanguageSelected={setLanguageSelected}
        >
            <div className="root-home">
                <Hero />
            </div>
            <Save languageSelected={languageSelected} />
            <WhatYouDo />
            <NewExplication />
            <About />
            <Warranty />
            <DownLoad />
            <ContactUs />
        </Layout>
    )
}

export default Home;
