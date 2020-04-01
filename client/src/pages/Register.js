import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from "./pages/About";
// import Search from "./pages/Members";
// import Search from "./pages/Home";
import Registration from "../components/Registration";
import Navbar from "../components/Nav/index";
import Footer from "../components/Footer/index";

// import Footer from "./components/Footer";
// import './App.css';

function Register() {
	return (
		<div>
			<Navbar />
			<Registration />
			<Footer />
		</div>
	);
}

export default Register;
