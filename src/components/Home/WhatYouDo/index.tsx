import * as React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useTranslation } from 'react-i18next';
import './style.css';

const WhatYouDo: React.FC = () => {

    const { t } = useTranslation('home');

    return (
        <div className="root-what-you-do">

            <h1
                className="root-what-you-do-h1"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                {t('WhatYouDo.title.h1')}
            </h1>

            <p
                className="root-what-you-do-p"
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
            >
                {t('WhatYouDo.title.p')}
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
