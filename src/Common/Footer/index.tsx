import * as React from "react";
import './style.css';

const Footer: React.FC = () => {
    return (
        <>
            <ul className="link-contact-us">
                <li>
                    Mentions légales & CGU
                </li>
                <li>
                    Politique de confidentialité
                </li>
            </ul>

            <footer>
                <p>Created by Career Karma. © 2020</p>
            </footer>

        </>

    )
}

export default Footer;

