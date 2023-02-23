import * as React from "react";
import iconPhone from "../../../../images/iconPhone.png";
import iconInsta from "../../../../images/iconInsta.png";
import iconFB from "../../../../images/iconFB.png";
import iconMessage from "../../../../images/iconMessage.png";
import iconTikTok from "../../../../images/iconTikTok.png";
import './style.css';

const Info: React.FC = () => {

    const Click = (link: string) => (e: any) => {
        (window as any).open(link, '_blank');
    }

    return (
        <div className="root-info">
            <div className="root-info-content">
                <h1>
                    Kaf8
                </h1>

                <ul className="info-ul-contact">
                    <li>
                        <span><img src={iconPhone} alt="icon phone" className="icon-img" /></span>
                        <a href="tel:+332122212">   +33 212 22 12</a>

                    </li>
                    <li>
                        <span><img src={iconMessage} alt="icon phone" className="icon-img" /></span><a href="mailto:info@kaf8.com">
                            info@kaf8.com
                        </a>
                    </li>
                </ul>

                <p>
                    N’hésitez pas à nous contacter.  Nous nous ferons le plaisir de vous répondre dans les meilleurs délais
                </p>

                <ul className="info-ul-social">
                    <li>
                        <img
                            src={iconFB}
                            alt="icon fb"
                            className="icon-img"
                            onClick={Click('https://www.facebook.com/Yourdeliverydatabank')}
                        />
                    </li>
                    <li>
                        <img
                            src={iconInsta}
                            alt="icon insta"
                            className="icon-img"
                            onClick={Click('https://www.instagram.com/kaf8app/')}
                        />
                    </li>
                    <li>
                        <img
                            src={iconTikTok}
                            alt="icon tweet"
                            style={{ position: 'relative', top: 4 }}
                            className="icon-img"
                            onClick={Click('https://www.tiktok.com/@kaf8app?is_from_webapp=1&sender_device=pc')}
                        />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Info;

