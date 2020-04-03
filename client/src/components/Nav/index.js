import React from "react";
import "./style.css";

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light collapse navbar-collapse">
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
		</div>
	);
}
export default Nav;
