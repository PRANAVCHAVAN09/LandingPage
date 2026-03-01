import { useEffect, useRef } from "react";
import TrackIcon from "../../assets/Benefits/Benefits_Icon_Track.svg";
import PrioritizeIcon from "../../assets/Benefits/Benefits_Icon_Priotitize.svg";
import CollaborateIcon from "../../assets/Benefits/Benefits_Icon_Collaborate.svg";
import "./benefits.css";

const Benefits = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".benefit-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to each card with its staggered delay
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("benefit-card--visible");
              }, index * 150); // 150ms stagger between each card
            });
            observer.disconnect(); // Animate only once
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the grid is visible
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section benefits">
      <div className="container">
        <header className="section-header benefits-header">
          <h2 className="section-title">
            Key benefits of using task
            <br />
            management software
          </h2>
        </header>

        <div className="benefits-grid" ref={gridRef}>
          <article className="benefit-card">
            <img
              src={TrackIcon}
              alt="Keep tasks in one place"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Keep tasks in one place</h3>
            <p className="benefit-text">
              Aliquam condimentum dictum gravida. Integer sagittis nisi ligula,
              sed laoreet nunc semper quis.
            </p>
          </article>

          <article className="benefit-card">
            <img
              src={PrioritizeIcon}
              alt="Prioritize your work"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Prioritize your work</h3>
            <p className="benefit-text">
              Facilisis consequat metus, quis interdum sapien sodales varius ex
              eget vulputate.
            </p>
          </article>

          <article className="benefit-card">
            <img
              src={CollaborateIcon}
              alt="Improve collaboration"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Improve collaboration</h3>
            <p className="benefit-text">
              Sit at urna placerat arcu magna ultrices lacinia sed nunc inceptos
              conubia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits;