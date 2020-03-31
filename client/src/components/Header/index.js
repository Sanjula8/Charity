import React from "react";
// import './App.css';
import HeaderImage from "../../images/charity-bg-Image.jpg";
import "./style.css";

function Header(props) {
  return (
    <div className="container">
      <header className="header text-center">
        <img className="header-image img-fluid" src={HeaderImage} />
      </header>
    </div>
  );
}

export default Header;
