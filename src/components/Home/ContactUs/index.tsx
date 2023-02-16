import * as React from "react";
import Form from './Form';
import Info from './Info';
import './style.css';

const ContactUS: React.FC = () => {
    return (
        <>
            <div className="root-contact-us" id="contact-us">

                <div className="contact-us-content">
                    <Form />
                </div>
                
                <div className="contact-us-content">
                    <Info />
                </div>

            </div>

            <ul className="link-contact-us">
                <li>
                    Mentions légales & CGU
                </li>
                <li>
                    Politique de confidentialité
                </li>
            </ul>
        </>

    )
}

export default ContactUS;

