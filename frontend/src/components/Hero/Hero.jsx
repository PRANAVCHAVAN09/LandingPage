import React from "react";
import HeroShapes from "../../assets/Hero/Hero_Shapes.svg";
import Card1 from "../../assets/Hero/Hero_Illustration_Card-1.svg";
import Card2 from "../../assets/Hero/Hero_Illustration_Card-2.svg";
import Card3 from "../../assets/Hero/Hero_Illustration_Card-3.svg";
import Card4 from "../../assets/Hero/Hero_Illustration_Card-4.svg";
import LogoCartoon from "../../assets/Logos/Cartoon_Network_logo.svg";
import LogoBooking from "../../assets/Logos/Booking.com_logo.svg";
import LogoDropbox from "../../assets/Logos/Dropbox_logo.svg";
import LogoToshiba from "../../assets/Logos/Toshiba_logo.svg";
import LogoSlack from "../../assets/Logos/Slack_logo.svg";
import LogoNetflix from "../../assets/Logos/Netflix_logo.svg";
import LogoSpotify from "../../assets/Logos/Spotify_logo.svg";
import LogoCocaCola from "../../assets/Logos/CocaCola_logo.svg";
import LogoRedBull from "../../assets/Logos/RedBull_logo.svg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-visual">
        <img src={HeroShapes} alt="" className="hero-shapes" />
      </div>

      <div className="container">
        <div className="hero-topbar">
          <div className="hero-logo">TaskMan</div>
          <button className="hero-top-cta" type="button">
            Try free
          </button>
        </div>

        <div className="hero-main">
          <div className="hero-left">
            <h1 className="hero-title">
              Task Management
              <br />
              And Lists Tool
            </h1>

            <p className="hero-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>

            <form
              className="hero-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="hero-input"
                type="email"
                placeholder="Name@company.com"
              />
              <button type="submit" className="hero-btn">
                Try for free
              </button>
            </form>

            <div className="hero-logos">
              <img src={LogoCartoon} alt="Cartoon Network" />
              <img src={LogoBooking} alt="Booking.com" />
              <img src={LogoDropbox} alt="Dropbox" />
              <img src={LogoToshiba} alt="Toshiba" />
              <img src={LogoSlack} alt="Slack" />
              <img src={LogoNetflix} alt="Netflix" />
              <img src={LogoSpotify} alt="Spotify" />
              <img src={LogoCocaCola} alt="Coca-Cola" />
              <img src={LogoRedBull} alt="Red Bull" />
            </div>
          </div>

          <div className="hero-right">
            <img src={Card1} alt="" className="hero-card hero-card-1" />
            <img src={Card2} alt="" className="hero-card hero-card-2" />
            <img src={Card3} alt="" className="hero-card hero-card-3" />
            <img src={Card4} alt="" className="hero-card hero-card-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;