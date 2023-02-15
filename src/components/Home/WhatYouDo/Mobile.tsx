import * as React from "react";
import phoneYouDo from "../../../images/phoneYouDo.png";
import './style.css';

const WhatYouDesktop: React.FC = () => {
    return (
        <div className="content-what-you-do-mobile">

            <div className="content-what-you-do-mobile-img">
                <img src={phoneYouDo} alt="phone you do" />
            </div>

            <div className="explication-content-what-you-do-mobile">
                <h1>
                    Trouver des préstataires pour vos courses
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                </p>
            </div>

            <div className="explication-content-what-you-do-mobile">
                <h1>
                    Devenir préstataire
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                </p>
            </div>

            <div className="explication-content-what-you-do-mobile">
                <h1>
                    Suivre vos livraison
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                </p>
            </div>

        </div>
    )
}

export default WhatYouDesktop;
