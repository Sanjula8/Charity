import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/UserLogin";
import Register from "./pages/Register";
import Members from "./pages/Members";
import Footer from "./components/Footer/index";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
						{document.cookie.match(/^.*loggedIn=true.*$/) ? (
							<Members />
						) : (
							<a className="nav-item nav-link" href="/login">
								Login First!
							</a>
						)}
					</Route>
					<Route exact path="/profile">
						<Profile />
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
