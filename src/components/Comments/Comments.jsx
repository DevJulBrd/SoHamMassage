// components/Comments/Comments.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import "./Comments.css";

export default function Comments({ items = [] }) {
  const list = useMemo(
    () => (Array.isArray(items) ? items.filter(Boolean) : []),
    [items]
  );

  // Slides avec clone du 1er à la fin (si >1)
  const slides = useMemo(() => {
    if (list.length > 1) return [...list, list[0]];
    return list;
  }, [list]);

  // Hooks
  const [index, setIndex] = useState(0);      // index visible (inclut le clone)
  const [anim, setAnim] = useState(true);     // transition on/off
  const trackRef = useRef(null);

  // Réinitialise si la source change (ex: autre presta)
  useEffect(() => {
    setIndex(0);
    setAnim(true);
  }, [slides.length]);

  // Auto-rotation 5s (si au moins 2 avis et motion autorisé)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || list.length <= 1) return;

    const id = setInterval(() => {
      setAnim(true); // s'assurer que l’anim est active
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(id);
  }, [list.length]);

  // Quand l’animation se termine et qu’on est sur le clone,
  // on saute sans transition à l’index réel 0.
  const handleTransitionEnd = () => {
    if (list.length > 1 && index === slides.length - 1) {
      // On est sur le clone
      setAnim(false);     // désactive la transition
      setIndex(0);        // saute à la vraie 1ère slide
      // Re-active la transition au prochain tick
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnim(true));
      });
    }
  };

  const isEmpty = list.length === 0;

  return (
    <section className="comments comments--carousel">
      <h3 className="comments__title carteID-cathegory">
        Avis {isEmpty ? null : <span className="carteID-cathegory">({list.length})</span>}
      </h3>

      {isEmpty ? (
        <p className="comments__empty">Aucun avis pour le moment.</p>
      ) : (
        <>
          <div className="cc-viewport" aria-live="polite">
            <ul
              ref={trackRef}
              className={`cc-track ${anim ? "" : "no-anim"}`}
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((c, i) => (
                <li className="cc-slide" key={`${c?.name || "anon"}-${i}`}>
                  <article className="comments__item">
                    <div className="comments__header">
                      <span className="comments__avatar" aria-hidden>💬</span>
                      <span className="comments__author">{c?.name || "Anonyme"}</span>
                    </div>
                    <p className="comments__content textmobile">{c?.content || ""}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {list.length > 1 && (
            <div className="cc-controls" aria-hidden="true">
              <button
                className="cc-btn"
                type="button"
                onClick={() => {
                  setAnim(true);
                  setIndex((prev) => {
                    // si on est au tout début, recule vers l'avant-dernière vraie slide
                    if (prev === 0) {
                      // saut instantané au clone de fin pour simuler back (optionnel)
                      setAnim(false);
                      const jump = slides.length - 1;
                      setIndex(jump);
                      requestAnimationFrame(() => {
                        requestAnimationFrame(() => setAnim(true));
                      });
                      return jump;
                    }
                    return prev - 1;
                  });
                }}
              >
                ←
              </button>
              <button
                className="cc-btn"
                type="button"
                onClick={() => {
                  setAnim(true);
                  setIndex((prev) => prev + 1);
                }}
              >
                →
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
