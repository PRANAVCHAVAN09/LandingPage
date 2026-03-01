import { useEffect, useRef } from "react";
import WhyRing from "../../assets/Why/Why_Shapes_Ellipse.svg";
import WhyStatsCard from "../../assets/Why/Why_Illustration.svg";
import ArrowIcon from "../../assets/Why/Arrow_icon.svg";
import WhyLayoutshape from "../../assets/Why/Why_Shapes.svg";
import "./why.css";

const Why = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ring = section.querySelector(".why-ring");
    const layoutShape = section.querySelector(".why-layout-shape");
    const card = section.querySelector(".why-card-stats");
    const copyElements = section.querySelectorAll(".why-copy > *");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // a) Ring + layout shape grow into position
            ring?.classList.add("why-ring--visible");
            layoutShape?.classList.add("why-layout-shape--visible");

            // b) Card burst in (CSS animation handles float after)
            setTimeout(() => {
              card?.classList.add("why-card--visible");
            }, 200);

            // c) Staggered fade reveal for copy — timed after card burst (~900ms)
            copyElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("why-copy-item--visible");
              }, 900 + i * 150);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section why" ref={sectionRef}>
      <img src={WhyLayoutshape} alt="" className="why-layout-shape" />
      <img src={WhyRing} alt="" className="why-ring" />

      <div className="container">
        <div className="why-layout">
          <div className="why-visual">
            <img src={WhyStatsCard} alt="" className="why-card why-card-stats" />
          </div>

          <div className="why-copy">
            <h2 className="why-title why-copy-item">
              Why do you need
              <br />
              task management
              <br />
              software?
            </h2>
            <p className="why-description why-copy-item">
              Do you waste time organizing sticky notes, searching your email and
              apps for to-dos, and figuring out what to work on first? Then you
              need one solution to prioritize your tasks, manage your time, and
              meet your deadlines.
            </p>

            <button className="why-cta why-copy-item" type="button">
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