import "./NewsItem.css";

export default function NewsItem({ item }) {
  const firstImage = item?.images?.[0];

  return (
    <article className="news-card">
        <a className="news-card-link" href={`/newsletter/${item.id}`}>
            <div className="news-card-img-container">
        
                <img
                className="news-card-img"
                src={firstImage}
                alt={item.title}
                loading="lazy"
                />
            </div>

                <div className="news-card-content-container">
                    <h3 className="news-card-title titleh2mobile">{item.title}</h3>
                    <p className="news-card-description textmobile">
                    {item.subtitle}
                    </p>
            </div>
        </a>
    </article>
  );
}
