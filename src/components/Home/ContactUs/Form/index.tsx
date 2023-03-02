
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { contactUs } from "../../../../Api";
import { Alert } from 'theme-ui';
import './style.css';

const Form: React.FC = () => {
    const { t } = useTranslation('home');

    const [handleChange, sethandleChange] = useState<any>({});
    const [response, setResponse] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (e: any) => {

        e.preventDefault();
        e.stopPropagation();
        setResponse(null);
        setLoading(true);

        try {
            const resonse = await contactUs(handleChange);
            setResponse({
                text: t('ContactUs.success.label'),
                classe: "contact-us-success"
            })
        } catch {
            setResponse({
                text: t('ContactUs.error.label'),
                classe: "contact-us-error"
            })
        } finally {
            setLoading(false);
        }

    }

    const handChangeInput = (e: any) => {

        const { value, name } = e.target;

        sethandleChange({
            ...handleChange,
            [name]: value
        });

    }

    return (
        <div className="form-contact-us">

            <h1>
                {t('ContactUs.title.h1')}
            </h1>

            <form method="post" onSubmit={onSubmit}>
                <div className="form-content-contact-us">
                    <label for="fullName">
                        {t('ContactUs.YourName.label')}
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        required={true}
                        id="fullName"
                        disabled={loading}
                        value={handleChange?.fullName || ""}
                        placeholder={`${t('ContactUs.YourName.placeholder')}`}
                        onChange={handChangeInput}
                    />
                </div>

                <div className="form-content-contact-us">
                    <label for="email">
                        {t('ContactUs.EmailAddress.label')}
                    </label>
                    <input
                        type="text"
                        disabled={loading}
                        name="email"
                        required={true}
                        id="email"
                        value={handleChange?.email || ""}
                        placeholder={`${t('ContactUs.EmailAddress.placeholder')}`}
                        onChange={handChangeInput}
                    />
                </div>

                <div className="form-content-contact-us">

                    <label for="description">
                        {t('ContactUs.Message.label')}
                    </label>

                    <textarea
                        name="description"
                        id="description"
                        disabled={loading}
                        value={handleChange?.description || ""}
                        required={true}
                        placeholder={`${t('ContactUs.Message.placeholder')}`}
                        onChange={handChangeInput}
                    />

                </div>


                <div className="form-content-contact-us">

                    {
                        response && (
                            <div className={response.classe}>
                                {response.text}
                            </div>
                        )
                    }

                    <button type="submit">
                        {
                            loading ? (
                                <>
                                    {t('ContactUs.btn.loading')}

                                </>
                            ) : (
                                <>
                                    {t('ContactUs.btn.label')}
                                </>
                            )
                        }
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form;

