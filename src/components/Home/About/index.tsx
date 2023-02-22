import * as React from "react";
import phoneAbout from '../../../images/phoneAbout.png';
import './style.css';

const About: React.FC = () => {
    return (
        <>
            <div
                className="root-about"
                id="About"
            >

                <div className="about-content">

                    <div>
                        <img
                            src={phoneAbout}
                            alt="Phone about"
                            className="img-about"
                            data-sal="zoom-in"
                            data-sal-delay="500"
                            data-sal-easing="ease"
                        />
                    </div>

                    <div className="about-content-text">

                        <div
                            className="about-content-text-all"
                        >

                            <h1>
                                A propos
                            </h1>

                            <p>
                                Tout à commencé lorsque <b>Marc GONCALVES CEO de Kf8 Transconnect a voulu  </b> organiser son déménagement. Très vite, il se rendit compte de la difficulté d’avoir un prestataire (particulier ou professionnel) de services sérieux et dont les tarifs n’étaient pas « à la tête du client ». Malgré l’existence de services de transports de qualité, ceux-ci ne sont pas ou peu visibles et accessibles pour le client lambda à tout moment. <br /> <br />
                                C’est ainsi qu’est partie l’idée de rassembler des prestataires professionnels désireux de gagner en visibilité web et prestataires particuliers réguliers ou occasionnels sur la même plate-forme et au service du client. <b> Aujourd’hui, des conducteurs de vélo, scooter, véhicule, camionnette, dépanneuse, ou semi-remorque </b> nous ont fait confiance et ont le contrôle. Le développement des échanges nationaux et internationaux induit l’accroissement du frêt et par voie de conséquences nous invite à adopter une nouvelle attitude, un autre regard sur notre mode de vie, notre organisation ; celle de servir notre prochain. Ainsi, nous avons développé un réseau tels de fourmis avec toute une organisation, une discipline qui nous font avancer dans la bonne direction.<br /> <br />
                                La solution fonctionne car elle offre à chaque prestataire quel qu’il soit la possibilité de pratiquer instantanément le tarif qui correspond le mieux à divers paramètres tels que sa position, le type de moyen de transport utilisé, la météo, les conditions de circulation… et ceci dans le respect de la clientèle.<br />
                                Kf8Transconnect est une communauté qui grandit et se développe grâce à vous.<br /> <br />
                                Kf8Transconnect, c’est la force d’un réseau.<br /> <br />
                                Kf8Transconnect vous invite à prendre le train en marche, celui de l’excellence.<br /> <br />
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default About;

