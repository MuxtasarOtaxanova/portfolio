import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>WEB_DEVELOPER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nihil nemo eaque totam eligendi optio aut, commodi corporis
            asperiores! Commodi, ipsam atque. Eius odit iusto aperiam et. Error,
            eum possimus!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2025 Muxtasar Otaxanova. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
