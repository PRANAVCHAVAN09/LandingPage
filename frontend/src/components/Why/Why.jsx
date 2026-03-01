import WhyRing from "../../assets/Why/Why_Shapes_Ellipse.svg";
import WhyStatsCard from "../../assets/Why/Why_Illustration.svg";
import WhyEarnersCard from "../../assets/Why/Why_Illustration-1.svg";
import ArrowIcon from "../../assets/Why/Arrow_icon.svg";
import WhyLayoutshape from "../../assets/Why/Why_Shapes.svg"
import "./why.css";

const Why = () => {
  return (
    <section className="section why">
      <img src={WhyLayoutshape} alt="" className="why-ring" />

      <div className="container">
        <div className="why-layout">
          <div className="why-visual">
            <div className="why-yellow1" />
            <div className="why-dark-shape1" aria-hidden="true" />
            <img src={WhyStatsCard} alt="" className="why-card why-card-stats" />
          </div>

          <div className="why-copy">
            <h2 className="why-title">
              Why do you need
              <br />
              task management
              <br />
              software?
            </h2>
            <p className="why-description">
              Do you waste time organizing sticky notes, searching your email and
              apps for to-dos, and figuring out what to work on first? Then you
              need one solution to prioritize your tasks, manage your time, and
              meet your deadlines.
            </p>

            <button className="why-cta" type="button">
              <span>LEARN MORE</span>
              <img src={ArrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;