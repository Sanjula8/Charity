import React from "react";
// import './App.css';
// import Footer from "../components/Footer";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Navbar from "../components/Nav/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<div class="container">
				<h1>WELCOME TO CHARITY HUB</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc aliquet diam tortor, id consequat mauris ullamcorper
					eu. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Pellentesque et dui id justo
					finibus sollicitudin at et metus. Ut feugiat tellus nec
					metus commodo, sed suscipit nisi gravida. Duis eget
					vestibulum quam, ut porttitor sem. Donec sagittis mi
					sollicitudin turpis
				</p>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
