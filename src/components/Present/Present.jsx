import './Present.css'

import profile from '../../assets/present.webp'

export default function Present () {
    return (
        <section className='present-section'>
            <h2 className='titleh1mobile present-title'>Je me présente</h2>
            <div className='present-container'>
                <img src={profile} alt='Emma Leroux' className='present-img' />
                <p className='textmobile present-text'>
                    Je m'appelle <span>Emma Le Roux</span>, j'ai 25 ans et je suis originaire de Rennes. Ancienne sportive professionnelle depuis mes 17 ans, j’ai toujours eu à cœur de prendre soin des autres. C’est tout naturellement que je me suis tournée vers le <span>massage bien-être</span>, une pratique qui me passionne profondément.
                    Mon parcours personnel, marqué par l’<span>endométriose</span> et le <span>SOPK</span>, m’a amenée à explorer différentes approches holistiques : <span>yoga</span>, <span>méditation</span>, <span>reiki</span>, <span>massages</span>… Toutes ces expériences ont nourri ma vision globale du bien-être, où corps et esprit sont intimement liés.
                </p>
                <hr></hr>
                <p className='textmobile present-text'>
                    Récemment, j’ai voyagé en Thaïlande pour me former au <span>massage traditionnel thaï</span>, une méthode ancestrale aux multiples bienfaits, centrée sur l’équilibre énergétique et le soulagement des tensions.
                    À travers mes soins, je vous propose une <span>véritable parenthèse</span> de détente, un moment suspendu pour vous reconnecter à vous-même. À l’écoute, bienveillante et passionnée, j’ai à cœur d’offrir un accompagnement sur mesure, inspiré de mes expériences et formations.
                </p>
            </div>
        </section>
    )
}