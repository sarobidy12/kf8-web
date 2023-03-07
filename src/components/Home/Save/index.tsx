import * as React from "react";
import { BtnDowload } from '../../../Common';
import saveFr from '../../../images/save-fr.png';
import saveEn from '../../../images/save-en.png';
import saveBe from '../../../images/save-be.png';
import './style.css';

interface ISave {
    languageSelected: "en" | "fr"
}

const Save: React.FC<ISave> = ({ languageSelected }) => {

    const getImg = {
        "fr": saveFr,
        "en": saveEn,
        "be": saveBe,
    }

    return (
        <div className="Save">

            <div className="view-save-desktop">
                <BtnDowload direction='row' />
            </div>
            
            <div>
                <img src={getImg?.[languageSelected] || ""} className="img-save" alt="img save" />
            </div>

        </div>
    )
}

export default Save;
