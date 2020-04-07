import React from "react";
import twitterIcon from "../../images/twitter-icon.png";
import faceIcon from "../../images/facebook-icon.png";
import instaIcon from "../../images/insta-icon.png";
import "./nav-styles.css";

function Nav() {
  return (
    <>
      <div
        className="row justify-content-end pr-5"
        style={{ height: "50px", backgroundColor: "#ffca0a" }}>
        <div className="social-icon d-flex align-items-center">
          <img src={twitterIcon} width="20" height="20" alt="twitter" />
          <img src={faceIcon} width="20" height="25" alt="facebook" />
          <img src={instaIcon} width="20" height="20" alt="instagram" />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Charity Hub
        </a>
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/register">
                Register
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
