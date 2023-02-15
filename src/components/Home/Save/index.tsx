import * as React from "react";
import { BtnDowload } from '../../../Common';
import imagesave from '../../../images/Save.png';
import './style.css';

const Save: React.FC = () => {
    return (
        <div className="Save">

            <div className="view-save-desktop">
                <BtnDowload />
            </div>
            <div>
                <img src={imagesave} className="img-save" alt="img save" />
            </div>

        </div>
    )
}

export default Save;
