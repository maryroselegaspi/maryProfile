import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Let's Keep in Touch!</h2>

      {/* <!-- Social media and contact links. Add or remove any networks. --> */}
      <div className="contact-info">
        <a href="mailto:maryrose.bne@gmail.com" target="_blank">
          maryrose.legaspi.bne@gmail.com
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
        {/* <a
          href="https://www.facebook.com/maryrose.legaspi.2017"
          target="_blank"
        >
          Facebook
        </a> */}
        <a
          className="cv"
          // href="https://drive.google.com/file/d/1As1A_9mlZZNd-UDcAELNdoDraBshhdkj/view?usp=sharing"
          href='https://drive.google.com/file/d/1snMNr-i_hVMffsjtFEWx2K97yUvKKoxf/view?usp=sharing'
          target="_blank"
        >
          Download CV{" "}
        </a>
      </div>
      <p></p>
      <p> &copy; {dt.getFullYear()} - Mary Rose Legaspi</p>
    </div>
  );
}

export default Footer;
