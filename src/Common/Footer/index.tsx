import * as React from "react";
import { useTranslation } from 'react-i18next';
import './style.css';

const Footer: React.FC = () => {

    const { t } = useTranslation('footer');

    return (
        <>
            <ul className="link-contact-us">
                <li>
                    {t('link.Legalnotices')}
                </li>
                <li>
                    {t('link.CsPrivacyPolicy')}
                </li>
            </ul>

            <footer>
                <p>
                    {t('copyRigth')}
                </p>
            </footer>

        </>

    )
}

export default Footer;

