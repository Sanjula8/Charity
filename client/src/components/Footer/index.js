import React from 'react';
import twitterIcon from "../../images/twitter-icon.png";
import faceIcon from "../../images/facebook-icon.png";
import instaIcon from "../../images/insta-icon.png";

import "./styles.css";

function Footer() {
  return (

    <footer className="footer">
        <div className="social-icon">
        <img src={twitterIcon} width="20" height="20" alt="twitter"/> 
        <img src={faceIcon} width="20" height="25" alt="facebook"/>
        <img src={instaIcon} width="20" height="20" alt="instagram"/>
        </div>
      <p>copyright</p>
    </footer>
      

 
        )
       
}

export default Footer;
