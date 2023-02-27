import * as React from "react";
import dowloadAndroid from "../../../images/dowloadAndroid.png";
import dowloadApple from "../../../images/dowloadApple.png";
import { useTranslation } from 'react-i18next';
import './style.css';

const DownLoad: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <div className="downLoad" id="downLoad">
            <div
                className="title-dowload-content"
            >
                <h1>
                    {t('DownLoad.title.h1')}
                </h1>
            </div>
            <div>
                <ul>
                    <li
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <img src={dowloadAndroid} alt="dowload android" />
                    </li>

                    <li
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <img src={dowloadApple} alt="dowload android" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DownLoad;

