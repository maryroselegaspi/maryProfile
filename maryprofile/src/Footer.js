import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Let's Keep in Touch!</h2>

      {/* <!-- Social media and contact links. Add or remove any networks. --> */}
      <div className="contact-info">
        <a href="mailto:maryrose.bne@gmail.com" target="_blank">
          maryrose.bne@gmail.com
        </a>
        <a href="https://profile-d8ca3.web.app/" target="_blank">
          Profile
        </a>
        <a href="https://github.com/maryroselegaspi" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/maryroselegaspi2018/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/maryrose.legaspi.2017"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1As1A_9mlZZNd-UDcAELNdoDraBshhdkj/view?usp=sharing"
          target="_blank"
        >
          Download CV{" "}
        </a>
      </div>
      <p></p>
      <p> by Mary Rose</p>
    </div>
  );
}

export default Footer;
