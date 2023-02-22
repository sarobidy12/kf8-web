import * as React from "react";
import phoneYouDo from "../../../images/phoneYouDo.png";
import './style.css';

const WhatYouDesktop: React.FC = () => {
    return (

        <div className="content-what-you-do">

            <div className="content-what-you-do-row align-justify-space-down">

                <div
                    className="explication-content-what-you-do-row align-right"
                    data-sal="slide-right"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                >
                    <h1>
                        Trouver des préstataires pour vos courses
                    </h1>
                    <p>
                        La librairie de prestataires dans ta région partout en Europe te permet aujourd’hui d’avoir le choix de contacter directement un prestataire de service (transporteur, livreur…) ou de faire une annonce correspondant à ton besoin
                    </p>
                </div>

                <div
                    className="explication-content-what-you-do-row align-right"
                    data-sal="slide-right"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                >
                    <h1>
                        Devenir préstataire
                    </h1>
                    <p>
                        Tu es un particulier ayant un moyen de transport et qui a envie de se faire un complément de revenu ? Tu représentantes une entreprise qui veut gagner en visibilité et augmenter son chiffre d’affaires ?
                        <br /> <br />
                        Alors, inscris toi comme prestataire et ajoute ton moyen de transport et le tour est joué
                    </p>
                </div>

            </div>

            <div >
                <div
                    className="content-what-you-do-row-img"
                    data-sal="zoom-in"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                >
                    <img src={phoneYouDo} alt="phone you do" />
                </div>
            </div>

            <div className="content-what-you-do-row align-item-center ">

                <div
                    className="explication-content-what-you-do-row align-left "
                    data-sal="slide-left"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                >
                    <h1>
                        Suivre vos livraisons Internationales
                    </h1>
                    <p>
                        Tu es un transporteur international ? Enregistre donc tes clients dans notre système <br /> <br />
                        Grace à notre fonction de tracking ils pourront désormais suivre le statut en temps réel de leur colis à l’international et ceci jusqu’à destination
                    </p>
                </div>

            </div>

        </div>
    )
}

export default WhatYouDesktop;
