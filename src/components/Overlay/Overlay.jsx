import './Overlay.css';

import img from '../../assets/homehover.webp';
import Button from '../Button/Button.jsx';

export default function Overlay() {
    return (
        <section className="overlay-container">
            <img src={img} alt="Bougies réconfortantes" className="overlay-image" />
            <div className="overlay-gradient">
                <h2 className="overlay-title titleh2mobile">Un espace cocooning alliant confort et professionnalisme</h2>
                <p className="overlay-text textmobile">
                    Installé chez moi, mon cabinet a été pensé pour offrir à mes clientes un véritable écrin de douceur et de bien-être. L’ambiance y est chaleureuse et apaisante, pour favoriser la détente dès le premier pas dans cet espace.
                    Malgré cette atmosphère cocooning, le cabinet reste un lieu professionnel, parfaitement équipé pour vous garantir des soins de qualité. Vous y trouverez une grande table de massage très confortable, conçue pour votre bien-être optimal, ainsi qu’un plaid chauffant pour rendre chaque massage encore plus agréable et personnalisé.
                    L’environnement invite à la relaxation grâce à une expérience sensorielle complète, mêlant musique douce et senteurs délicates, créant ainsi une ambiance unique propice au lâcher-prise.
                    Mon objectif est de vous accueillir dans un cadre où le confort rencontre l’expertise, pour que chaque séance soit un véritable moment de ressourcement et de sérénité.
                </p>
                <Button text="Qui suis-je ?" link="/medecouvrir" />
            </div>      
        </section>
    )
}