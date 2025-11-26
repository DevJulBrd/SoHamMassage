import "./Discount.css"

export default function Discount () {
    return (
        <div className="discount-container">
            <h2 className="dicount-title titleh2mobile">Réductions</h2>
            <p className="discoutn-text textmobile">Chez <span className="discount-special">Maison So Ham</span>, nous croyons que le <span className="discount-special">bien-être</span> et la <span className="discount-special">relaxation</span> ne devraient jamais être un luxe. C’est pourquoi nous offrons <span className="discount-special">-20% de remise</span> à tous les <span className="discount-special">étudiants</span>, aux <span className="discount-special">personnes de plus de 70 ans</span>, ainsi qu’à toutes les <span className="discount-special">femmes atteintes de maladies gynécologiques</span>. Parce que prendre soin de soi, c’est essentiel, à tout âge et dans toutes les situations.</p>
        </div>
    )
}