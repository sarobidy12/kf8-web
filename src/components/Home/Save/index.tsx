import * as React from "react";
import { BtnDowload } from '../../../Common';
import saveFr from '../../../images/save-fr.png';
import saveEn from '../../../images/save-en.png';
import './style.css';

interface ISave {
    languageSelected: "en" | "fr"
}

const Save: React.FC<ISave> = ({ languageSelected }) => {
    return (
        <div className="Save">

            <div className="view-save-desktop">
                <BtnDowload />
            </div>
            <div>
                <img src={languageSelected === "fr" ? saveFr : saveEn} className="img-save" alt="img save" />
            </div>

        </div>
    )
}

export default Save;
