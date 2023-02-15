import * as React from "react";
import dowloadAndroid from "../../images/dowloadAndroid.png";
import dowloadApple from "../../images/dowloadApple.png";
import './style.css';

const Hero: React.FC = () => {
    return (

        <ul className="ul-dowload">
            <li>
                <img src={dowloadAndroid} alt="dowload android" className="img-dowload" />
            </li>
            <li>
                <img src={dowloadApple} alt="dowload apple" className="img-dowload" />
            </li>
        </ul>

    )
}

export default Hero;

