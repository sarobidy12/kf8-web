import * as React from "react";
import { useTranslation } from 'react-i18next';
import './style.css';

const Form: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <div className="form-contact-us">

            <h1>
                {t('ContactUs.title.h1')}
            </h1>

            <div className="form-content-contact-us">
                <label for="name">
                    {t('ContactUs.YourName.label')}
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={`${t('ContactUs.YourName.placeholder')}`}
                />
            </div>

            <div className="form-content-contact-us">
                <label for="email">
                    {t('ContactUs.EmailAddress.label')}
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder={`${t('ContactUs.EmailAddress.placeholder')}`}
                />
            </div>

            <div className="form-content-contact-us">
                <label for="name">
                    {t('ContactUs.Message.label')}
                </label>
                <textarea
                    name="name"
                    id="name"
                    placeholder={`${t('ContactUs.Message.placeholder')}`}
                />
            </div>

            <div className="form-content-contact-us">
                <button type="submit">
                    {t('ContactUs.btn.label')}
                </button>
            </div>

        </div>
    )
}

export default Form;

