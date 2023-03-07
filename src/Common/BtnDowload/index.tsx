import React, { FC } from "react";
import googlePlayStore from "../../images/google-play-store.png";
import appleAppStore from "../../images/apple-app-store.png";
import { Trans, useTranslation } from 'react-i18next';
import Content from './Content';
import './style.css';

interface IBtnDowload {
    direction: 'row' | 'coloum'
}

const BtnDowload: FC<IBtnDowload> = ({
    direction
}) => {

    const { t } = useTranslation('dowload');

    return (

        <ul className={direction}>
            <li>
                <Content
                    img={googlePlayStore}
                    p={t('android')}
                    h3="Google Play Store"
                />
            </li>
            <li>
                <Content
                    img={appleAppStore}
                    p={t('apple')}
                    h3="App Store"
                />
            </li>
        </ul>

    )
}

export default BtnDowload;

