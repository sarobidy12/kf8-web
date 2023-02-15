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

                    <div className="content-warranty-explication">
                        <h2>
                            Sécurité
                        </h2>

                        <p>
                            La sécurité reste la priorité chez Kf8Transconnect et est liée à la recherche de valeurs essentielles ⁹dont l’honnêteté, la fiabilité et le respect.
                        </p>
                    </div>

                    <div className="content-warranty-explication">
                        <h2>
                            Ponctualité
                        </h2>
                        <p>
                            La ponctualité est une règle d’or. Néanmoins, avec l’accord mutuel entre les différentes parties, le service peut être différé.
                        </p>
                    </div>

                    <div className="content-warranty-explication">
                        <h2>
                            Ponctualité
                        </h2>

                        <p>
                            Kf8 Transconnect, c’est l’assurance d’avoir 24h/24 un service rapide, de qualité avec des prestataires qui ont le souci du détail.
                        </p>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Warranty;

