import * as React from "react";
import phoneYouDo from "../../../images/phoneYouDo.png";
import { Trans, useTranslation } from 'react-i18next';
import './style.css';

const WhatYouDesktop: React.FC = () => {

    const { t } = useTranslation('home');

    return (

        <div className="content-what-you-do">

            <div className="content-what-you-do-row align-justify-space-down">

                <div
                    className="explication-content-what-you-do-row align-right"
                    data-sal="slide-right"
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
                    className="explication-content-what-you-do-row align-right"
                    data-sal="slide-right"
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

            </div>

            <div>
                <div
                    className="content-what-you-do-row-img"
                    data-sal="zoom-in"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                >
                    <img src={phoneYouDo} alt="phone you do" />
                </div>
            </div>

            <div className="content-what-you-do-row align-item-center ">

                <div
                    className="explication-content-what-you-do-row align-left "
                    data-sal="slide-left"
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

        </div>
    )
}

export default WhatYouDesktop;
