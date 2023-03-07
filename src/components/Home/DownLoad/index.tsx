import * as React from "react";
import { BtnDowload } from '../../../Common';
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
                <BtnDowload direction='coloum' />
            </div>
        </div>
    )
}

export default DownLoad;

