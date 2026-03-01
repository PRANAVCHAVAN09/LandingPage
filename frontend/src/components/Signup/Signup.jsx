import { useState } from "react";
import SignupShape from "../../assets/Signup/Signup_Shape.svg";
import useSignup from "../../hooks/useSignup";
import "./signup.css";

const Signup = () => {


  const [email, setEmail] = useState("");
  const { signup, loading, error, success } = useSignup();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await signup(email);
    if (ok) setEmail("");
  };

  return (
    <section className="signup">
      <img src={SignupShape} alt="" className="signup-shape" />

      <div className="container signup-inner">

        <div className="signup-copy">
          <h2 className="section-title">Get better work done</h2>
          <p className="section-description">
            See why millions of people across 195 countries use TaskMan.
            Contact with us to build new growth together.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
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