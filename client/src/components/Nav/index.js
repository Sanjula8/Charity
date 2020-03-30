import React from "react";
function Nav() {
    return (
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
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
