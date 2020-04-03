import React from "react";

function MembersBar() {
<<<<<<< HEAD
=======
	function Logout() {
		document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	}
>>>>>>> 379392a3af6af1a05161db83be91499fca2f198a
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/members">
					Charity Hub
				</a>
				<div className="container">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-item nav-link" href="/profile">
								Profile
							</a>
						</li>
						<li className="nav-item">
<<<<<<< HEAD
							<a className="nav-item nav-link" href="/">
=======
							<a
								onClick={Logout}
								className="nav-item nav-link"
								href="/"
							>
>>>>>>> 379392a3af6af1a05161db83be91499fca2f198a
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
