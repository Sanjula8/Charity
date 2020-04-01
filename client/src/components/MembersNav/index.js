import React from "react";

function MembersBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-item nav-link" href="/profile">
								Profile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-item nav-link" href="/">
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default MembersBar;
