import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import closeIcon from "../../images/close.png";
import menuIcon from "../../images/menu.png";
import logoIcon from "../../images/logo.png";
import { useTranslation, } from 'react-i18next';
import BtnSelectLanguage from '../BtnSelectLanguage';
import './style.css';

interface IHeader {
    handleOpen: () => void;
    languageSelected: string;
}

const Header: FC<IHeader> = ({
    handleOpen, languageSelected
}) => {

    const { t } = useTranslation('header');

    const open = () => {
        (document as any).getElementById('menu').style.display = 'block';
        (document as any).getElementById('Open').style.display = 'none';
        (document as any).getElementById('Close').style.display = 'block';
        (document as any).getElementById('header').style.background = 'white';
    }

    const close = () => {
        if (window.innerWidth < 900) {
            (document as any).getElementById('menu').style.display = 'none';
            (document as any).getElementById('Open').style.display = 'block';
            (document as any).getElementById('Close').style.display = 'none';
            (document as any).getElementById('header').style.background = 'transparent';
        }
    }

    useLayoutEffect(() => {

        window.addEventListener('resize', () => {
            if (window.innerWidth < 900) {
                (document as any).getElementById('menu').style.display = 'none';
                (document as any).getElementById('btn').style.visibility = 'visible';
                close();
            } else {
                (document as any).getElementById('menu').style.display = 'block';
                (document as any).getElementById('btn').style.visibility = 'hidden';
            }
        });

    }, []);

    useEffect(() => {
        if (window.innerWidth < 900) {
            (document as any).getElementById('menu').style.display = 'none';
            (document as any).getElementById('btn').style.visibility = 'visible';
            close();
        } else {
            (document as any).getElementById('menu').style.display = 'block';
            (document as any).getElementById('btn').style.visibility = 'hidden';
        }
    }, [])

    const handleChange = (data: any) => {
        console.log("data", data)
    }

    return (
        <div className='header' id="header">
            <div>
                <img
                    src={logoIcon}
                    alt='open icon'
                    className='logo-icon'
                />
            </div>
            <div>
                <div id="btn" className='btnMobile'>
                    <div id="Open" onClick={open}>
                        <img
                            src={menuIcon}
                            alt='open icon'
                            className='btnOpen'
                        />
                    </div>
                    <div id="Close" onClick={close}>
                        <img
                            src={closeIcon}
                            alt='close'
                            className='btnOpen'
                        />
                    </div>
                </div>
                <div id="menu" className='menuHeader'>
                    <ul>
                        <li>
                            <a href="#About" onClick={close}>
                                {t('ABOUTUS')}
                            </a>
                        </li>
                        <li>
                            <a href="#downLoad" onClick={close}>
                                {t('DOWNLOADAPP')}
                            </a>
                        </li>
                        <li>
                            <a href="#contact-us" onClick={close}>
                                {t('CONTACTUS')}
                            </a>
                        </li>
                        <li>
                            <BtnSelectLanguage
                                handleOpen={handleOpen} languageSelected={languageSelected}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;