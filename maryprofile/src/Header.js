import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import profilelogo2 from "./profilelogo2.png";
import profile from "./profile.png";

function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="header">
      {/* <h4> this is the header part</h4> */}
      {/* <div className="header__logo"> */}
      <Link to="/">
        <img className="header__logo" src={profile} alt="" />
      </Link>
      {/* </div> */}
      <div className={`header__links ${show && "header__black"}`}>
        {/* <div className="header__links"> */}

        <Link to="/project">
          <button className="header__link">Projects</button>
        </Link>
        <Link to="education">
          <button className="header__link">Education</button>
        </Link>
        <Link to="resume">
          <button className="header__link">Resume</button>
        </Link>
        <Link to="contact">
          <button className="header__link">Contact</button>
        </Link>
      </div>
      {/* <div className="fadeBottom"></div> */}
    </div>
  );
}

export default Header;
