import "./PriceMassage.css"

import Calif from "../../assets/calif4.webp"
import Ayu from "../../assets/vedic3.webp"
import Reflexo from "../../assets/reflexo2.webp"
import Amma from "../../assets/amma1.webp"
import Thai from "../../assets/thai2.webp"
import Crane from "../../assets/crane3.webp"
import Pelv from "../../assets/pelv1.webp"
import Drain from "../../assets/drainage1.webp"
import Flow from "../../assets/flow3.webp"
import Pre from "../../assets/pre1.webp"

export default function PriceMassage () {
    return (
        <section className="priceMassage-container">
            <h1 className="priceMassage-title titleh1mobile">Tarifs</h1>

            <div className="priceMassage-card">
                <img src={Calif} alt="Massage Californien" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                   <h2 className="priceMassage-title-card titleh2mobile">Massage Californien</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">40 minutes (face dorsale ou ventrale)</p>
                        <p className="priceMassage-info textmobile">40€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">70 minutes (corps entier)</p>
                        <p className="priceMassage-info textmobile">70€</p>
                    </div> 
                </div>    
            </div>

            <div className="priceMassage-card">
                <img src={Ayu} alt="Massage Ayurvédique" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                  <h2 className="priceMassage-title-card titleh2mobile">Massage Ayurvédique</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">40 minutes (face dorsale ou ventrale)</p>
                        <p className="priceMassage-info textmobile">45€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">70 minutes (corps entier)</p>
                        <p className="priceMassage-info textmobile">75€</p>
                    </div>  
                </div>   
            </div>

            <div className="priceMassage-card">
                <img src={Reflexo} alt="Massage de réflexologie plantaire" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                   <h2 className="priceMassage-title-card titleh2mobile">Réflexologie Plantaire</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">35 minutes</p>
                        <p className="priceMassage-info textmobile">40€</p>
                    </div> 
                </div>   
            </div>

            <div className="priceMassage-card">
                <img src={Amma} alt="Massage Amma Assis" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                   <h2 className="priceMassage-title-card titleh2mobile">Amma Assis</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">30 minutes (séance individuelle)</p>
                        <p className="priceMassage-info textmobile">35€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">Entreprise</p>
                        <p className="priceMassage-info textmobile">Sur devis</p>
                    </div> 
                </div>   
            </div>

            <div className="priceMassage-card">
                <img src={Thai} alt="Massage Thaïlandais" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                  <h2 className="priceMassage-title-card titleh2mobile">Massage Traditionnel Thaïlandais</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">80 minutes (corps entier en 5 étapes)</p>
                        <p className="priceMassage-info textmobile">80€</p>
                    </div>  
                </div>
            </div>

            <div className="priceMassage-card">
                <img src={Crane} alt="Massage Thaïlandais crânien" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                    <h2 className="priceMassage-title-card titleh2mobile">Massage Crânien Thaïlandais</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">40 minutes (crânial)</p>
                        <p className="priceMassage-info textmobile">50€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">75 minutes (crânial et corps)</p>
                        <p className="priceMassage-info textmobile">80€</p>
                    </div> 
                </div>
            </div>

            <div className="priceMassage-card">
                <img src={Pelv} alt="Massage Pelvien" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                    <h2 className="priceMassage-title-card titleh2mobile">Soulager les douleurs pelviennes Féminines</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">50 minutes (protocole 1, doux)</p>
                        <p className="priceMassage-info textmobile">55€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">50 minutes (protocole 2, profond)</p>
                        <p className="priceMassage-info textmobile">60€</p>
                    </div>  
                </div>   
            </div>

            <div className="priceMassage-card">
                <img src={Flow} alt="Massage Flow" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                    <h2 className="priceMassage-title-card titleh2mobile">Massage Flow</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">40 minutes</p>
                        <p className="priceMassage-info textmobile">55€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">70 minutes</p>
                        <p className="priceMassage-info textmobile">80€</p>
                    </div>  
                </div>   
            </div>

            <div className="priceMassage-card">
                <img src={Pre} alt="Massage Flow Prénatal" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                    <h2 className="priceMassage-title-card titleh2mobile">Massage Flow Prénatal</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">75 minutes</p>
                        <p className="priceMassage-info textmobile">80€</p>
                    </div> 
                </div>   
            </div>

            <div className="priceMassage-card priceMassage-card-special">
                <img src={Drain} alt="Drainage Lymphatique" className="priceMassage-img" />
                <div className="priceMassage-overlay">
                    <h2 className="priceMassage-title-card titleh2mobile">Drainage Lymphatique</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">40 minutes ("face sclupt" + massage visage)</p>
                        <p className="priceMassage-info textmobile">55€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">45/60 minutes (2 parties du corps au choix)</p>
                        <p className="priceMassage-info textmobile">65€</p>
                    </div>  
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">85 minutes (corps entier)</p>
                        <p className="priceMassage-info textmobile">115€</p>
                    </div> 
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">100 minutes (corps entier + massage)</p>
                        <p className="priceMassage-info textmobile">125€</p>
                    </div> 
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info textmobile">120/135 minutes (corps entier + massage + face sclupt)</p>
                        <p className="priceMassage-info textmobile">180€</p>
                    </div> 
                    <h2 className="priceMassage-title-card titleh2mobile">Cure (5 séances)</h2>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info priceMassage-info-special textmobile">Face sclupt (40 minutes)</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-line textmobile">300€</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-color textmobile">255€</p>
                    </div>
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info priceMassage-info-special textmobile">2 parties du corps au choix (45/60 minutes)</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-line textmobile">350€</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-color textmobile">300€</p>
                    </div> 
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info priceMassage-info-special textmobile">Full body (85 minutes)</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-line textmobile">575€</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-color textmobile">500€</p>
                    </div> 
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info priceMassage-info-special textmobile">Full body + massage (100 minutes)</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-line textmobile">625€</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-color textmobile">560€</p>
                    </div> 
                    <div className="priceMassage-info-card">
                        <p className="priceMassage-info priceMassage-info-special textmobile">Full body + massage + face sculpt (120/135 minutes)</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-line textmobile">900€</p>
                        <p className="priceMassage-info priceMassage-info-special priceMassage-color textmobile">770€</p>
                    </div>
                </div>   
            </div>
        </section>
    )
}