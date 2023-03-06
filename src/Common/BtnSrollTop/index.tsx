import React, { FC, useLayoutEffect } from 'react';
import btnScrollTop from "../../images/btnScrollTop.svg";
import './style.css';

const BtnSrollTop: FC = () => {

    const scrollTop = () => {
        (window as any).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    useLayoutEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.pageYOffset > 300) {
                (document as any).getElementById("btn-scroll-top").style.display = "block";
            } else {
                (document as any).getElementById("btn-scroll-top").style.display = "none";
            }
        });

    });

    return (
        <div id="btn-scroll-top" >
            <div
                className='content-btn-scroll-top'

                onClick={scrollTop}
            >
                <img src={btnScrollTop} alt="btn sroll top" className="btn-scroll"/>
            </div>
        </div>
    );
}

export default BtnSrollTop;