import React from "react";
// import './App.css';
// import Footer from "../components/Footer";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Navbar from "../components/Nav/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Blog from "../components/Blog/index";
import "./Home.css";

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="container-fluid home-container">
				<h1 className="welcome">Welcome to CharityHub</h1>
				<div className="row"></div>
				<section className="row dflex-justify-content-between mx-auto">
					<div className="col about">
						<h1>About Us</h1>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc aliquet diam tortor, id consequat mauris
						ullamcorper eu. Orci varius natoque penatibus et magnis
						dis parturient montes, nascetur ridiculus mus.
						Pellentesque et dui id justo finibus sollicitudin at et
						metus. Ut feugiat tellus nec metus commodo, sed suscipit
						nisi gravida. Duis eget vestibulum quam, ut porttitor
						sem. Donec sagittis mi sollicitudin turpis
					</div>
					<Blog />
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
