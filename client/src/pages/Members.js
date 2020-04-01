import React from "react";
import MembersBar from "../components/MembersNav/index";
import CharityCard from "../components/CharitySearch/index";
// import './App.css';

function Members() {
	return (
		<div>
			<MembersBar />
			<div className="container">
				<div className="text-center">
					<h1>Welcome USER</h1>
				</div>
				<div>
					<CharityCard />
				</div>
			</div>
		</div>
	);
}

export default Members;
