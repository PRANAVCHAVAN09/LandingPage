  import SignupShape from "../../assets/Signup/Signup_Shape.svg";
  import WhyRing from "../../assets/Why/Why_Shapes_Ellipse.svg";
  import "./signup.css";

  const Signup = () => {
    return (
      <section className="signup">
        {/* <img src={WhyRing} alt="" className="signup-ring" /> */}
        <img src={SignupShape} alt="" className="signup-shape" />
        <div className="container signup-inner">
          <div className="signup-copy">
            <h2 className="section-title">Get better work done</h2>
            <p className="section-description">
              See why millions of people across 195 countries use TaskMan.Contact with us to build New Growth together
            </p>
          </div>

          <form
            className="signup-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="signup-input"
              type="email"
              placeholder="name@company.com"
            />
            <button className="signup-btn" type="submit">
              Try for free
            </button>
          </form>
        </div>
      </section>
    );
  };

  export default Signup;