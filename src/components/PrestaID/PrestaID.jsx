import './PrestaID.css';

import { useParams, Link } from "react-router-dom";
import prestaData from "../../data/presta";
import Galery from "../Galery/Galery";
import CarteID  from "../CarteID/CarteID";
import Comments from "../Comments/Comments";

export default function PrestaID() {
    const { id } = useParams();
    const prestaId = Number(id);
    const presta = prestaData.find((p) => p.id === prestaId);
    const slides = presta ? presta.images : [];


    if(!presta) {
        return (
            <section className="presta">
                <h1>Prestation introuvable</h1>
                <p>La prestation #{id} n’existe pas.</p>
                <Link to="/prestations">← Retour aux prestations</Link>
            </section>
        )
    }


    return (
        <section className='prestaID-section'>
            <Galery slides={slides} />
            <CarteID presta={presta} />
            {presta.coments && presta.coments.length > 0 && (
                <Comments items={presta.coments} />
            )}
        </section>
    )
}