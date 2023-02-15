import * as React from "react";
import './style.css';

const Form: React.FC = () => {
    return (
        <div className="form-contact-us">

            <h1>
                Nous contacter
            </h1>

            <div className="form-content-contact-us">
                <label for="name">
                    Votre nom
                </label>
                <input type="text" name="name" id="name" placeholder="Entrer votre nom ici" />
            </div>

            <div className="form-content-contact-us">
                <label for="email">
                    Adresse e-mail
                </label>
                <input type="text" name="email" id="email" placeholder="Entrer adresse e-mail" />
            </div>

            <div className="form-content-contact-us">
                <label for="name">
                    Message
                </label>
                <textarea name="name" id="name" placeholder="Décrivez ici votre requête..." />
            </div>

            <div className="form-content-contact-us">
                <button type="submit">
                    Envoyer
                </button>
            </div>

        </div>
    )
}

export default Form;

