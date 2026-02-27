import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="container">

        {/* HERO TOP BAR (logo + CTA) */}
        <div className="hero-topbar">
          <div className="hero-logo">Brand</div>
         <div className="hero-topbar">
  <div className="hero-logo">Brand</div>
</div>
        </div>

        {/* MAIN CONTENT */}
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Manage your business smarter
            </h1>

            <p className="hero-description">
              Powerful tools that help you track, analyze and grow your business faster than ever before.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>
        </div>

      </div>

      {/* VISUAL CANVAS */}
      <div className="hero-visual">
        <div className="circle circle-blue"></div>
        <div className="circle circle-yellow"></div>
        <div className="circle circle-dark"></div>
          <div className="hero-floating-cta">Try free</div>

        {/* <div className="card card-1"></div>
        <div className="card card-2"></div>
        <div className="card card-3"></div> */}
      </div>

    </section>
  );
};

export default Hero;