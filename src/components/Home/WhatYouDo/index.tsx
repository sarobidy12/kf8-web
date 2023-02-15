import * as React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import './style.css';

const WhatYouDo: React.FC = () => {
    return (
        <div className="root-what-you-do">

            <h1 className="root-what-you-do-h1">
                Ce que nous vous permettrons de faire
            </h1>

            <p className="root-what-you-do-p">
                Lorem ipsum dolor sit amet consectetur. Elit massa tincidunt amet amet euismod. Morbi tristique quisque nunc tortor interdum.
            </p>

            <div className="view-desktop">
                <Desktop />
            </div>
            <div className="view-mobile">
                <Mobile />
            </div>
        </div>
    )
}

export default WhatYouDo;
