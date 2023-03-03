import * as React from "react";
import hero from "../../../images/hero.png";
import { BtnDowload } from "../../../Common";
import { useTranslation } from 'react-i18next';
import './style.css';

const Hero: React.FC = () => {

    const { t } = useTranslation('home');

    return (
        <>
            <div className="root-Hero">

                <div className="display-flex-hero">

                    <div
                        className="content-Hero-right "
                    >

                        <h1
                            className="content-Hero-h1"
                        >
                            {t('hero.h1')}
                        </h1>
                        <p
                            className="content-Hero-p"
                        >
                            {t('hero.p')}
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

