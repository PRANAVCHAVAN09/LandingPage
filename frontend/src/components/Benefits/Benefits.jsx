import TrackIcon from "../../assets/Benefits/Benefits_Icon_Track.svg";
import PrioritizeIcon from "../../assets/Benefits/Benefits_Icon_Priotitize.svg";
import CollaborateIcon from "../../assets/Benefits/Benefits_Icon_Collaborate.svg";
import "./benefits.css";

const Benefits = () => {
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

        <div className="benefits-grid">
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