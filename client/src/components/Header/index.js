import React from "react";
// import './App.css';
import HeaderImage from "../../images/charity-bg-Image.jpg";
import "./style.css";

function Header() {
	return (
		<div className="container">
			<header className="header text-center">
				<img className="header-image img-fluid" src={HeaderImage} />
			</header>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
