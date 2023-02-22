import * as React from "react";
import './style.css';

const Warranty: React.FC = () => {
    return (
        <>
            <div className="root-warranty">

                <h1>
                    Nos garanties
                </h1>

                <div className="content-warranty">

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            Sécurité
                        </h2>

                        <p>
                            La sécurité reste la priorité chez Kaf8 et est liée à la recherche de valeurs essentielles dont l’honnêteté, la fiabilité et le respect.
                        </p>
                    </div>

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            Ponctualité
                        </h2>
                        <p>
                            La sécurité reste la priorité chez Kaf8 et est liée à la recherche de valeurs essentielles dont l’honnêteté, la fiabilité et le respect.
                        </p>
                    </div>

                    <div
                        className="content-warranty-explication"
                        data-sal="flip-up"
                        data-sal-delay="500"
                        data-sal-easing="ease"
                    >
                        <h2>
                            Assurance
                        </h2>

                        <p>
                            Kaf8 , c’est l’assurance d’avoir 24h/24 un service rapide, de qualité avec des prestataires qui ont le souci du détail et à qui vous pouvez attribuer une note après chaque prestation
                        </p>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Warranty;

