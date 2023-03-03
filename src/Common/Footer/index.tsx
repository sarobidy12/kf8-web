import { Link } from "gatsby";
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
                    <Link to="/privacy-policy/">
                        {t('link.CsPrivacyPolicy')}
                    </Link>
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

