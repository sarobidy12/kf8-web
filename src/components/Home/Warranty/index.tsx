import * as React from "react";
import { useTranslation } from 'react-i18next';
import './style.css';

const Warranty: React.FC = () => {

    const { t } = useTranslation('home');

    return (
        <>
            <div className="root-warranty">

                <h1>
                    {t('OurGuarantees.title.h1')}
                </h1>

                <div className="content-warranty">

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            {t('OurGuarantees.Security.h1')}
                        </h2>

                        <p>
                            {t('OurGuarantees.Security.p')}
                        </p>
                    </div>

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            {t('OurGuarantees.Punctuality.h1')}
                        </h2>
                        <p>
                            {t('OurGuarantees.Punctuality.p')}
                        </p>
                    </div>

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            {t('OurGuarantees.Assurance.h1')}
                        </h2>

                        <p>
                            {t('OurGuarantees.Assurance.p')}
                        </p>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Warranty;

