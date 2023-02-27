import * as React from "react";
import phoneYouDo from "../../../images/phoneYouDo.png";
import { Trans, useTranslation } from 'react-i18next';
import './style.css';

const WhatYouDesktop: React.FC = () => {

    const { t } = useTranslation('home');

    return (
        <div className="content-what-you-do-mobile">

            <div
                className="content-what-you-do-mobile-img"
                data-sal="zoom-in"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                <img src={phoneYouDo} alt="phone you do" />
            </div>

            <div
                className="explication-content-what-you-do-mobile"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                <h1>
                    {t('WhatYouDo.FindServiceProvidersForYourShopping.h1')}
                </h1>
                <p>
                    <Trans
                        i18nKey="WhatYouDo.FindServiceProvidersForYourShopping.p" // optional -> fallbacks to defaults if not provided
                        components={{ bold: <b /> }}
                    />
                </p>
            </div>

            <div
                className="explication-content-what-you-do-mobile"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                <h1>
                    {t('WhatYouDo.BecomeServiceProvider.h1')}
                </h1>
                <p>
                    <Trans
                        i18nKey="WhatYouDo.BecomeServiceProvider.p" // optional -> fallbacks to defaults if not provided
                        components={{ bold: <b /> }}
                    />
                </p>
            </div>

            <div
                className="explication-content-what-you-do-mobile"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                <h1>
                    {t('WhatYouDo.TrackYourInternationalDeliveries.h1')}
                </h1>
                <p>
                    <Trans
                        i18nKey="WhatYouDo.TrackYourInternationalDeliveries.p" // optional -> fallbacks to defaults if not provided
                        components={{ bold: <b /> }}
                    />
                </p>
            </div>

        </div>
    )
}

export default WhatYouDesktop;
