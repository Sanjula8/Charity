// import './App.css';
import React, { useState, useEffect } from "react";
import "./style.css";

function Registration() {
  const [formObject, setFormObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      const data = formObject;
      //Using Concurrently to run react server and server.js server on different ports, then trying to send
      //Fetch post to the backend server. Problem would be solved if there were an easy way to run both the
      //React server and backend server on the same port, or make them the same server so the route in server.js
      //can be caught.
      //WHen running front end, back-end wasn't running, so just using fetch on /api/registration did not work.
      //Attempted to run both servers and send to another localhost, except fetch didn't like that
      fetch("/api/registration", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data),
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
    <div className="container" id="reg-container">
      <h3>SIGN-UP HERE</h3>
      <hr></hr>
      <form className="form-group">
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="exampleInputFirstName1">First name</label>
            <input
              name="firstName"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleInputFirstName1"
              aria-describedby="firstNameHelp"
              placeholder="Enter first name"
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="exampleInputLastName1">Last name</label>
            <input
              name="lastName"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleInputLastName1"
              aria-describedby="lastNameHelp"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <label htmlFor="exampleInputStreetAddress1">Street address</label>
            <input
              name="streetAddress"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleInputStreetAddress1"
              aria-describedby="addressHelp"
              placeholder="Enter your street address"
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="exampleInputCity1">City</label>
            <input
              name="lastName"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleInputCity1"
              aria-describedby="cityHelp"
              placeholder="Enter city"
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="exampleInputCity1">Zip Code</label>
            <input
              name="zipCode"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleInputZip1"
              aria-describedby="zipHelp"
              placeholder="Zip Code"
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email address.
            </small>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="exampleInputUserName1">User Name</label>
            <input
              name="username"
              onChange={handleInputChange}
              type="username"
              className="form-control"
              id="exampleInputUserName1"
              aria-describedby="usernameHelp"
              placeholder="Choose your user-name"
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Choose your password"
            />
          </div>

          <div className="col-sm-6 pt-2">
            <button
              type="submit"
              className="btn btn-secondary"
              disabled={!(formObject.username && formObject.password)}
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
          <hr></hr>
        </div>
      </form>
    </div>
  );
}
export default Registration;
