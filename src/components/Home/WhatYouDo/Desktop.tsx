import * as React from "react";
import phoneYouDo from "../../../images/phoneYouDo.png";
import './style.css';

const WhatYouDesktop: React.FC = () => {
    return (

        <div className="content-what-you-do">

            <div className="content-what-you-do-row align-justify-space-down">

                <div className="explication-content-what-you-do-row align-right">
                    <h1>
                        Trouver des préstataires pour vos courses
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                    </p>
                </div>

                <div className="explication-content-what-you-do-row align-right">
                    <h1>
                        Devenir préstataire
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                    </p>
                </div>

            </div>

            <div >
                <div className="content-what-you-do-row-img">
                    <img src={phoneYouDo} alt="phone you do" />
                </div>
            </div>

            <div className="content-what-you-do-row align-item-center ">

                <div className="explication-content-what-you-do-row align-left ">
                    <h1>
                        Suivre vos livraison
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default WhatYouDesktop;
