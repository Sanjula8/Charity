import React from 'react';
// import './App.css';
import HeaderImage from "../../images/charity-bg-Image.jpg";
import "./style.css";

function Header(props) {
  return (
    <header className="header text-center">
      <img src={HeaderImage}/>
    </header>
  );
}

export default Header;
