import React from "react";
// import './App.css';
import HeaderImage from "../../images/charity-bg-image2.jpg";
import "./style.css";

function Header() {
  return (
    <div>
      <header className="header d-flex justify-content-center">
        <img width="100%" src={HeaderImage} />
      </header>
    </div>
  );
}

export default Header;
