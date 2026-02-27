import "../Header/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-layout">
          <h1 className="logo">Brand</h1>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;