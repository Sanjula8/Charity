// import './App.css';
import React, { useState, useEffect } from "react";

function Registration() {
  const [formObject, setFormObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.userName && formObject.password) {
      const data = formObject;
      //Using Concurrently to run react server and server.js server on different ports, then trying to send
      //Fetch post to the backend server. Problem would be solved if there were an easy way to run both the
      //React server and backend server on the same port, or make them the same server so the route in server.js
      //can be caught.
      //WHen running front end, back-end wasn't running, so just using fetch on /api/registration did not work.
      //Attempted to run both servers and send to another localhost, except fetch didn't like that
      fetch("api/regstration", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          console.log("Success:", response);
        })

        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
  return (
    <div className="container">
      <form className="form-group">
        <div className="row">
          <div className="col-sm-6">
            <label for="exampleInputFirstName1">First name</label>
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
            <label for="exampleInputLastName1">Last name</label>
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
            <label for="exampleInputStreetAddress1">Street address</label>
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
            <label for="exampleInputCity1">City</label>
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
            <label for="exampleInputCity1">Zip Code</label>
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
            <label for="exampleInputEmail1">Email address</label>
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
            <label for="exampleInputUserName1">User Name</label>
            <input
              name="userName"
              onChange={handleInputChange}
              type="username"
              className="form-control"
              id="exampleInputUserName1"
              aria-describedby="usernameHelp"
              placeholder="Choose your user-name"
            />
          </div>
          <div className="col-sm-6">
            <label for="exampleInputPassword1">Password</label>
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
              disabled={!(formObject.userName && formObject.password)}
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Registration;
