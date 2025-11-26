import "./Presta.css";

import { Link } from "react-router-dom";
import prestaData from "../../data/presta";

export default function Presta() {
  return (
    <section className="presta-section">
      <h1 className="presta-title titleh1mobile">Nos Prestations</h1>

      <div className="presta-cards-container">
        {prestaData.map(({ id, images, title, subtitle, description, price, duration }) => {
          const prices = Array.isArray(price) ? price : (price ? [price] : []);
          const durations = Array.isArray(duration) ? duration : (duration ? [duration] : []);
          const rows = Math.max(prices.length, durations.length);

          return (
            <Link to={`/prestations/${id}`} key={id} className="presta-card-link">
              <div className="presta-card">
                <img src={images?.[0]} alt={title} className="presta-card-image" />

                <div className="presta-card-infos">
                  <h2 className="presta-card-title">{title}</h2>
                  <p className="presta-card-subtitle">{subtitle}</p>
                  <p className="presta-card-description">{description}</p>

                  {rows > 0 && (
                    <div className="presta-card-price-container">
                      <div className="presta-card-price">
                        {Array.from({ length: rows }).map((_, i) => (
                          <div className="presta-price-row" key={i}>
                            {prices[i] && (
                              <div className="presta-card-price-amount">{prices[i]}</div>
                            )}
                            {durations[i] && (
                              <div className="presta-card-price-duration">{durations[i]}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
