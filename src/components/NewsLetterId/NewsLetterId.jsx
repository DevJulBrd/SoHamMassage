import "./NewsLetterId.css"

import { useParams, Link } from "react-router-dom";
import newsData from "../../data/newsLetter";
import Galery from "../Galery/Galery"

export default function NewsLetterId() {
    const { id } = useParams();
    const newsId = Number(id);
    const news = newsData.find((p) => p.id === newsId);
    const slides = news ? news.images : [];

    const paragraphs = news.content.split(/\n{2,}/);

    const renderContentWithLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);

        return parts.map((part, index) => {
        // Si la partie est une URL complète → on met un <a>
        if (/^https?:\/\/[^\s]+$/.test(part)) {
            return (
            <a
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
            >
                {part}
            </a>
            );
        }

        // Sinon, juste du texte
        return <span key={index}>{part}</span>;
        });
    };

    if(!news) {
        return (
            <section className="presta">
                <h1>Prestation introuvable</h1>
                <p>La prestation #{id} n’existe pas.</p>
                <Link to="/newsletter">← Retour aux prestations</Link>
            </section>
        )
    }

    return (
        <section className="newsid-container">
            <div className="newsid-content-title">
                <img src={slides[0]} alt={news.title} className="newsid-img" />
                <h1 className="newsid-title titleh1mobile">{news.title}</h1>
                <h2 className="newsid-subtitle titleh2mobile">{news.subtitle}</h2>
            </div>
            <div className="newsid-content-container">
                {paragraphs.map((p, i) => 
                    <p key={i} className="newsid-content textmobile">{renderContentWithLinks(p)}</p>
                )}
            </div>
            <Galery slides={slides} />
        </section>
    )
}