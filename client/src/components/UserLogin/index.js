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
    if (formObject.userName && formObject.password) {
      fetch("/api/userLogin", {
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
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
  return (
    <div className="container" id="login-container">
      <h3>LOGIN HERE</h3>
      <hr></hr>
      <div className="col-6">
        <form className="form-group">
          <label for="exampleInputuserName1">User Name</label>
          <input
            name="userName"
            onChange={handleInputChange}
            type="username"
            className="form-control"
            id="exampleInputuserName1"
            aria-describedby="userNameHelp"
            placeholder="Enter username"
          />
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </form>
        <div>
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={!(formObject.email && formObject.password)}
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
