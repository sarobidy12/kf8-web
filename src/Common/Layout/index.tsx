import React, { useEffect, useState, FC } from "react";
import Head from "../Head";
import Footer from "../Footer";
import ModalSelectLanguage from "../ModalSelectLanguage";
import { useTranslation } from 'react-i18next';


interface ILayout {
    children: any;
    languageSelected: string;
    setLanguageSelected: (data: any) => void;
}

const Layout: FC<ILayout> = ({ children, languageSelected, setLanguageSelected }) => {

    const { i18n } = useTranslation('home');

    const [open, setOpen] = useState(false);

    const handleChangeLanguage = (lg: any) => {
        setLanguageSelected(lg.key);
        i18n.changeLanguage(lg.key);
        setOpen(false);
    }

    useEffect(() => {
        handleChangeLanguage({
            key: i18n.language
        });
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div>
            <Head
                handleOpen={handleOpen}
                languageSelected={languageSelected}
            />

            <div>
                {children}
            </div>

            <Footer />

            <ModalSelectLanguage
                open={open}
                setLanguage={handleChangeLanguage}
            />
        </div>

    )
}

export default Layout;
