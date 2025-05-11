import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleConnectClick = () => {
    setEmail(""); // Email inputni tozalaydi
  };

  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>WEB_DEVELOPER</h2>
          <p>
            My name is Muxtasar Otaxanova, a passionate and motivated web
            developer with a solid foundation in front-end technologies
            including HTML, CSS, JavaScript, and React. I have successfully
            completed training in these technologies and am currently expanding
            my skills by learning Node.js to become a full-stack developer.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
          <p onClick={handleConnectClick} style={{ cursor: "pointer" }}>
            Connect with me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
