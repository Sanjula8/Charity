import React from "react";

function MembersBar() {
  function Logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Charity Hub
        </a>
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="/members">
                Members
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item nav-link" href="/profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a onClick={Logout} className="nav-item nav-link" href="/">
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
