import * as React from "react";
import phoneAbout from '../../../images/phoneAbout.png';
import { Trans, useTranslation } from 'react-i18next';
import './style.css';

const About: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <>
            <div
                className="root-about"
                id="About"
            >

                <div className="about-content">

                    <div>
                        <img
                            src={phoneAbout}
                            alt="Phone about"
                            className="img-about"
                            data-sal="zoom-in"
                            data-sal-delay="500"
                            data-sal-easing="ease"
                        />
                    </div>

                    <div className="about-content-text">

                        <div
                            className="about-content-text-all"
                        >

                            <h1>
                                {t('about.title.h1')}
                            </h1>

                            <p>
                                <Trans
                                    i18nKey="about.title.p" // optional -> fallbacks to defaults if not provided
                                    components={{ bold: <b /> }}
                                />
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default About;

