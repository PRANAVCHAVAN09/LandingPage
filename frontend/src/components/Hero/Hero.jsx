import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">Your Catchy Heading Goes Here</h1>

            <p className="hero-description">
              Small supporting text explaining the product. Keep it 2–3 lines.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-visual">
            <div className="circle circle-blue"></div>
            <div className="circle circle-yellow"></div>
            <div className="circle circle-dark"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
