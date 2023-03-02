import React, { useState } from "react";
import { Trans, useTranslation } from 'react-i18next';
import { Layout } from "../../Common";
import './style.css';

const WhatYouDesktop: React.FC = () => {

    const { t } = useTranslation('privacyPolicy');

    const [languageSelected, setLanguageSelected] = useState<any>(null);

    return (
        <Layout
            languageSelected={languageSelected}
            setLanguageSelected={setLanguageSelected}
        >

            <div className="root-privacy">
                <Trans
                    t={t}
                    i18nKey="content" // optional -> fallbacks to defaults if not provided
                    components={{
                        bold: <b />,
                        h2: <h2 />,
                        a: <a />,
                        h1: <h1 />
                    }}
                />
            </div>

        </Layout>
    )
}

export default WhatYouDesktop;
