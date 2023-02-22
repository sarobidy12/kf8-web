import * as React from "react";
import dowloadAndroid from "../../../images/dowloadAndroid.png";
import dowloadApple from "../../../images/dowloadApple.png";
import './style.css';

const DownLoad: React.FC = () => {
    return (
        <div className="downLoad" id="downLoad">
            <div
                className="title-dowload-content"
            >
                <h1>
                    Télécharger rapidement l’application sur
                </h1>
            </div>
            <div>
                <ul>
                    <li
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <img src={dowloadAndroid} alt="dowload android" />
                    </li>

                    <li
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <img src={dowloadApple} alt="dowload android" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DownLoad;

