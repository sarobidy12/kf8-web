import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import closeIcon from "../../images/close.png";
import menuIcon from "../../images/menu.png";
import logoIcon from "../../images/logo.png";
import { useTranslation, } from 'react-i18next';
import BtnSelectLanguage from '../BtnSelectLanguage';
import './style.css';
import { Link } from 'gatsby';

interface IHeader {
    languageSelected: string;
    handleChangeLanguage: (lg: any) => void;
    withLink?: boolean;
}

const Header: FC<IHeader> = ({
    handleChangeLanguage,
    languageSelected,
    withLink
}) => {

    const { t } = useTranslation('header');

    const open = () => {
        (document as any).getElementById('menu').style.display = 'block';
        (document as any).getElementById('Open').style.display = 'none';
        (document as any).getElementById('Close').style.display = 'block';
        (document as any).getElementById('content-close-modal').style.display = 'block';
        (document as any).getElementById('header').style.background = 'white';
    }

    const close = () => {
        if (window.innerWidth < 900) {
            (document as any).getElementById('menu').style.display = 'none';
            (document as any).getElementById('Open').style.display = 'block';
            (document as any).getElementById('Close').style.display = 'none';
            (document as any).getElementById('content-close-modal').style.display = 'none';
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

    return (
        <>
            <div className='header' id="header">
                <div>
                    <Link to='/'>
                        <img
                            src={logoIcon}
                            alt='open icon'
                            className='logo-icon'
                        />
                    </Link>
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
                            {
                                withLink && (
                                    <>
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
                                    </>
                                )
                            }
                            <li>
                                <BtnSelectLanguage
                                    handleChangeLanguage={handleChangeLanguage}
                                    languageSelected={languageSelected}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='content-close-modal' id='content-close-modal' onClick={close} />
        </>

    );
}

export default Header;