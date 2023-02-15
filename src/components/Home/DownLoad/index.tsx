import * as React from "react";
import dowloadAndroid from "../../../images/dowloadAndroid.png";
import dowloadApple from "../../../images/dowloadApple.png";
import './style.css';

const DownLoad: React.FC = () => {
    return (
        <div className="downLoad">
            <div className="title-dowload-content">
                <h1>
                    Télécharger rapidement l’application sur
                </h1>
            </div>
            <div>
                <ul>
                    <li>
                        <img src={dowloadAndroid} alt="dowload android" />
                    </li>

                    <li>
                        <img src={dowloadApple} alt="dowload android" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DownLoad;

