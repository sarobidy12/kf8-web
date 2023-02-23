import * as React from "react";
import hero from "../../../images/hero.png";
import { BtnDowload } from "../../../Common";
import './style.css';

const Hero: React.FC = () => {
    return (
        <>
            <div className="root-Hero">
                
                <div>

                    <div
                        className="content-Hero-right margin-15"
                    >

                        <h1
                            className="content-Hero-h1"
                        >
                            LA MEILLEURE SOLUTION DE LIVRAISON EN 2023
                        </h1>
                        <p
                            className="content-Hero-p"
                        >
                            Essayer kaf8 c’est l’adopter
                        </p>

                        <div className="view-desktop">
                            <BtnDowload />
                        </div>

                    </div>

                    <div
                        className="content-Hero-left"
                        data-sal="zoom-in"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <img src={hero} alt="img phone" className="img-hero" />
                    </div>

                    <div className="view-mobil">
                        <BtnDowload />
                    </div>

                </div>

            </div>

            <div className="content-hero-bouttom"></div>
        </>

    )
}

export default Hero;

