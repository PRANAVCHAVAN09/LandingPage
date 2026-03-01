import { useState, useEffect, useRef } from "react";
import SignupShape from "../../assets/Signup/Signup_Shape.svg";
import useSignup from "../../hooks/useSignup";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const { signup, loading, error, success } = useSignup();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const shape = section.querySelector(".signup-shape");
    const fadeItems = section.querySelectorAll(".signup-fade-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // b) Triangle fans/slides in from the right
            shape?.classList.add("signup-shape--visible");

            // a) Staggered fade reveal for copy + form
            fadeItems.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("signup-fade-item--visible");
              }, i * 180);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await signup(email);
    if (ok) setEmail("");
  };

  return (
    <section className="signup" ref={sectionRef}>
      <img src={SignupShape} alt="" className="signup-shape" />

      <div className="container signup-inner">

        <div className="signup-copy signup-fade-item">
          <h2 className="section-title">Get better work done</h2>
          <p className="section-description">
            See why millions of people across 195 countries use TaskMan.
            Contact with us to build new growth together.
          </p>
        </div>

        <form className="signup-form signup-fade-item" onSubmit={handleSubmit}>
          <input
            className="signup-input"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="signup-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Try for free"}
          </button>
        </form>

        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}

      </div>
    </section>
  );
};

export default Signup;