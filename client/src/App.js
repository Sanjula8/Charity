import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/UserLogin";
import Header from "./components/Header";
import Register from "./pages/Register";
import Members from "./pages/Members";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<div>
				{/* <Nav /> */}
				{/* <Header /> */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/members">
						<Members />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Footer />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
