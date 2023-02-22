import * as React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import './style.css';

const WhatYouDo: React.FC = () => {
    return (
        <div className="root-what-you-do">

            <h1
                className="root-what-you-do-h1"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                Ce que nous vous permettrons de faire
            </h1>

            <p
                className="root-what-you-do-p"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                Avec la vocation Européenne de Kaf8, la recherche de prestataires du transport et de la livraison n’aura jamais été aussi aisée.
            </p>

            <div className="view-desktop">
                <Desktop />
            </div>

            <div className="view-mobile">
                <Mobile />
            </div>

        </div>
    )
}

export default WhatYouDo;
