import "./CarteID.css";
import { useState, useMemo } from "react";

export default function CarteID({ presta }) {
  // états par section
  const [open, setOpen] = useState({
    description: true,
    deroulement: false,
    bienfaits: false,
    public: false,
    prices: false,
    cure: false,  
  });

  // bascule une section
  const toggle = (key) => {
    setOpen((o) => ({ ...o, [key]: !o[key] }));
  };

  const prices = Array.isArray(presta.price) ? presta.price : (presta.price ? [presta.price] : []);
  const durations = Array.isArray(presta.duration) ? presta.duration : (presta.duration ? [presta.duration] : []);
  const rows = Math.max(prices.length, durations.length);

  const curePrices = Array.isArray(presta.curePrice)
  ? presta.curePrice
  : presta.curePrice
  ? [presta.curePrice]
  : [];

  const cureDiscounts = Array.isArray(presta.cureDiscount)
    ? presta.cureDiscount
    : presta.cureDiscount
    ? [presta.cureDiscount]
    : [];

  const cureDurations = Array.isArray(presta.cureDuration)
    ? presta.cureDuration
    : presta.cureDuration
    ? [presta.cureDuration]
    : [];

  const cureRows = Math.max(
    cureDurations.length,
    curePrices.length,
    cureDiscounts.length
  );

  const hasCure = cureRows > 0;

  // petit utilitaire pour la compatibilité ARIA
  const sectionId = useMemo(() => ({
    description: "sec-desc",
    deroulement: "sec-der",
    bienfaits:   "sec-bienfaits",
    public:      "sec-public",
    prices:      "sec-prices",
    cure: "sec-cure",
  }), []);

  return (
    <section className="carteID-section">
      <h1 className="carteID-title">{presta.title}</h1>
      <h2 className="carteID-subtitle">{presta.subtitle}</h2>

      {/* Description */}
      <h3
        className="carteID-cathegory is-toggle"
        role="button"
        tabIndex={0}
        aria-controls={sectionId.description}
        aria-expanded={open.description}
        onClick={() => toggle("description")}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle("description")}
      >
        Description
      </h3>
      <div
        id={sectionId.description}
        className={`carteID-collapse ${open.description ? "open" : ""}`}
        aria-hidden={!open.description}
      >
        <p className="carteID-description">{presta.description}</p>
      </div>

      {/* Déroulement */}
      <h3
        className="carteID-cathegory is-toggle"
        role="button"
        tabIndex={0}
        aria-controls={sectionId.deroulement}
        aria-expanded={open.deroulement}
        onClick={() => toggle("deroulement")}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle("deroulement")}
      >
        Déroulement
      </h3>
      <div
        id={sectionId.deroulement}
        className={`carteID-collapse ${open.deroulement ? "open" : ""}`}
        aria-hidden={!open.deroulement}
      >
        <p className="carteID-description">{presta.deroulement}</p>
      </div>

      {/* Bienfaits */}
      <h3
        className="carteID-cathegory is-toggle"
        role="button"
        tabIndex={0}
        aria-controls={sectionId.bienfaits}
        aria-expanded={open.bienfaits}
        onClick={() => toggle("bienfaits")}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle("bienfaits")}
      >
        Bienfaits
      </h3>
      <div
        id={sectionId.bienfaits}
        className={`carteID-collapse ${open.bienfaits ? "open" : ""}`}
        aria-hidden={!open.bienfaits}
      >
        <div className="carteID-bienfaits-container">
          {presta.biensfaits?.map((bienfait, index) => (
            <p key={index} className="carteID-description carteID-bienfait">
              <span className="carteID-point">•</span> {bienfait}
            </p>
          ))}
        </div>
      </div>

      {/* Pour qui ? */}
      <h3
        className="carteID-cathegory is-toggle"
        role="button"
        tabIndex={0}
        aria-controls={sectionId.public}
        aria-expanded={open.public}
        onClick={() => toggle("public")}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle("public")}
      >
        Pour qui ?
      </h3>
      <div
        id={sectionId.public}
        className={`carteID-collapse ${open.public ? "open" : ""}`}
        aria-hidden={!open.public}
      >
        <p className="carteID-description">{presta.public}</p>
      </div>

      {/* Durée / Tarif */}
      <h3
        className="carteID-cathegory is-toggle"
        role="button"
        tabIndex={0}
        aria-controls={sectionId.prices}
        aria-expanded={open.prices}
        onClick={() => toggle("prices")}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle("prices")}
      >
        Durée / Tarif
      </h3>
      <div
        id={sectionId.prices}
        className={`carteID-collapse ${open.prices ? "open" : ""}`}
        aria-hidden={!open.prices}
      >
        {rows > 0 ? (
          <div className="carteID-price-container">
            {Array.from({ length: rows }).map((_, i) => (
              <div className="carteID-price-row" key={i}>
                {prices[i] && (
                  <div className="carteID-description carteID-price carteID-duration">
                    {prices[i]}
                  </div>
                )}
                {durations[i] && (
                  <div className="carteID-description carteID-price">
                    {durations[i]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="carteID-description">Tarif et durée communiqués sur demande.</p>
        )}
      </div>
      {hasCure && (
        <div className="carteID-price-container">
          <h3
            className="carteID-cathegory is-toggle"
            role="button"
            tabIndex={0}
            aria-controls={sectionId.cure}
            aria-expanded={open.cure}
            onClick={() => toggle("cure")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && toggle("cure")
            }
          >
            Cure (5 séances)
          </h3>
          <div
            id={sectionId.cure}
            className={`carteID-collapse ${open.cure ? "open" : ""}`}
            aria-hidden={!open.cure}
          >
            {cureRows > 0 ? (
              <div className="carteID-price-container">
                {Array.from({ length: cureRows }).map((_, i) => (
                  <div className="carteID-price-row" key={i}>
                    {cureDiscounts[i] && (
                      <div className="carteID-description carteID-price carteID-duration">
                        {cureDiscounts[i]}
                      </div>
                    )}
                    {curePrices[i] && (
                      <div className="carteID-description carteID-price carteID-discount">
                        {curePrices[i]}
                      </div>
                    )}
                    {cureDurations[i] && (
                      <div className="carteID-description carteID-price">
                        {durations[i]}
                      </div>
                    )}
                  </div>
                ))}
                </div>
                ) : (
                  <p className="carteID-description">
                    Informations sur la cure communiquées sur demande.
                  </p>
                )}
              </div>
        </div>
      )}

    </section>
  );
}
