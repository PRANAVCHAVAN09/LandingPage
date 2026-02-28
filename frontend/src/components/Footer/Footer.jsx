import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Brand</div>
            <p className="footer-text">
              Modern analytics and automation so your whole business can move in
              the same direction.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Brand. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;