// import './App.css';
import React, { useState, useEffect } from "react";
import "./style.css";

function UserLogin() {
	const [formObject, setFormObject] = useState({});
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.username && formObject.password) {
			document.cookie = "loggedIn=true";
			console.log(JSON.stringify(formObject));
			fetch("/api/userlogin", {
				method: "POST", // or 'PUT'
				body: JSON.stringify(formObject),
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(response => {
					console.log("Success:", response);
					return response.json();
				})
				//the data is a parsed response from the JSON

				.then(data => {
					console.log(data);
					if (data.err) {
						window.location.replace("/");
					} else {
						window.location.replace("/members");
					}
				})
				.catch(function(err) {
					console.log(err);
				});
		}
	}
	return (
		<div className="container" id="login-container">
			<h3>LOGIN HERE</h3>
			<hr></hr>
			<div className="col-6">
				<form className="form-group">
					<label htmlFor="exampleInputusername1">User Name</label>
					<input
						name="username"
						onChange={handleInputChange}
						type="username"
						className="form-control"
						id="exampleInputusername1"
						aria-describedby="usernameHelp"
						placeholder="Enter username"
					/>
					<div className="form-group">
						<label htmlFor="exampleInputpassword1">Password</label>
						<input
							name="password"
							onChange={handleInputChange}
							type="password"
							className="form-control"
							id="exampleInputpassword1"
							placeholder="Password"
						/>
					</div>
				</form>
				<div>
					<button
						type="submit"
						className="btn btn-secondary"
						disabled={!(formObject.username && formObject.password)}
						onClick={handleFormSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
export default UserLogin;
