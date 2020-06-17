import React, { useState, useEffect } from "react";
import "./user.css";

function UserInfo() {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch("/api/user_data", {
			method: "GET",
			credentials: "same-origin",
		})
			.then((res) => res.json())
			.then((response) => {
				setUser(response);
			});
	}, []);

	return (
		<div className="card" style={{ width: "18rem;" }}>
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body">
				<h5>
					<span
						className="card-title user"
						style={{
							color: "green",
							fontFamily: "Pacifico, cursive",
						}}
					>
						{user.firstName} {user.lastName}
					</span>
				</h5>
				<p className="card-text"></p>
			</div>
			<ul className="list-group list-group-flush user-info">
				<li className="list-group-item">Email: {user.email}</li>
				<li className="list-group-item">City: {user.city}</li>
				<li className="list-group-item">State: {user.state}</li>
			</ul>
			<div className="card-body"></div>
		</div>
	);
}

export default UserInfo;
