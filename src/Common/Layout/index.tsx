import React, { useEffect, FC } from "react";
import Head from "../Head";
import Footer from "../Footer";
import BtnSrollTop from "../BtnSrollTop";
import { useTranslation } from 'react-i18next';


interface ILayout {
    children: any;
    languageSelected: string;
    setLanguageSelected: (data: any) => void;
    headerWithLink?: boolean;
}

const Layout: FC<ILayout> = ({ children, languageSelected, headerWithLink, setLanguageSelected }) => {

    const { i18n } = useTranslation('home');

    const handleChangeLanguage = (lg: any) => {
        setLanguageSelected(lg.key);
        i18n.changeLanguage(lg.key);
    }

    useEffect(() => {
        handleChangeLanguage({
            key: i18n.language
        });
    }, []);

    return (
        <div>

            <Head
                handleChangeLanguage={handleChangeLanguage}
                languageSelected={languageSelected}
                withLink={headerWithLink}
            />

            <div>
                {children}
            </div>

            <BtnSrollTop />

            <Footer />

        </div>
    )
}

export default Layout;
