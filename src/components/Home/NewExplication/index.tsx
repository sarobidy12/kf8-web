import * as React from "react";
import downImgExplication from "../../../images/downImgExplication.png";
import upImgExplication from "../../../images/upImgExplication.png";
import RightImgExplication from "../../../images/RightImgExplication.png";
import imgNewExplicationpositionRight from "../../../images/imgNewExplicationpositionRight.png";
import './style.css';

const NewExplication: React.FC = () => {
    return (
        <>
            <div className="root-new-explication">
                <div className="new-explication-content">
                    <h1>
                        Plus de centaines de prestataires disponibles tous les jours
                    </h1>

                    <div className="col-new-explication">
                        <div className="row-new-explication new-explication-align-justify-space-down">

                            <div>
                                <img src={upImgExplication} alt="up img explication" className="up-down-img-new-explication" />
                            </div>

                            <div>
                                <img src={downImgExplication} alt="up img explication" className="up-down-img-new-explication" />
                            </div>

                        </div>
                        <div className="row-new-explication">
                            <img src={RightImgExplication} alt="up img explication" className="up-down-img-new-explication" />
                        </div>
                    </div>
                </div>

                <div className="new-explication-content">
                    <img src={imgNewExplicationpositionRight} alt="up img explication" className="up-down-img-new-explication" />
                </div>
            </div>
        </>
    )
}

export default NewExplication;

