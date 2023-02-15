import * as React from "react";
import iconPhone from "../../../../images/iconPhone.png";
import iconInsta from "../../../../images/iconInsta.png";
import iconFB from "../../../../images/iconFB.png";
import iconMessage from "../../../../images/iconMessage.png";
import iconTweet from "../../../../images/iconTweet.png";
import './style.css';

const Info: React.FC = () => {
    return (
        <div className="root-info">
            <div className="root-info-content">
                <h1>
                    Kaf8
                </h1>

                <ul className="info-ul-contact">
                    <li>
                        <span><img src={iconPhone} alt="icon phone" className="icon-img" /></span>  +33 212 22 12
                    </li>
                    <li>
                        <span><img src={iconMessage} alt="icon phone" className="icon-img" /></span>   kf8support@contanct.com
                    </li>
                </ul>

                <p>
                    N’hésitez pas à nous contacter.  Nous nous ferons le plaisir de vous répondre dans les meilleurs délais
                </p>

                <ul className="info-ul-social">
                    <li>
                        <img src={iconFB} alt="icon fb" className="icon-img" />
                    </li>
                    <li>
                        <img src={iconTweet} alt="icon tweet" className="icon-img" />
                    </li>
                    <li>
                        <img src={iconInsta} alt="icon insta" className="icon-img" />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Info;

