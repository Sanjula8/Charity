import React from "react";
import twitterIcon from "../../images/twitter-icon.png";
import faceIcon from "../../images/facebook-icon.png";
import instaIcon from "../../images/insta-icon.png";
import copyright from "../../images/copyright.png";

import "./footer-styles.css";

function Footer() {
	return (
		<>
			<footer className="row d-flex p-2 bd-highlight justify-content-center">
				<div className="social-icon d-flex align-items-center">
					{/* <img
						src={twitterIcon}
						width="20"
						height="20"
						alt="twitter"
					/>
					<img src={faceIcon} width="20" height="25" alt="facebook" />
					<img
						src={instaIcon}
						width="20"
						height="20"
						alt="instagram"
					/> */}
				</div>
			</footer>
			<div className="row justify-content-center" id="copyright">
				CharityHub
				<img src={copyright} width="10" height="10" alt="copyright" />
			</div>
		</>
	);
}

export default Footer;
