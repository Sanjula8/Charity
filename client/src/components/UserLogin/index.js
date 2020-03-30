
// import './App.css';
import React, { useState, useEffect } from "react";
function UserLogin() {
    const [formObject, setFormObject] = useState({});
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        // if (formObject.email && formObject.password) {
        //     API.userLogin(formObject)
        //       .then(redirect ("/members/"))
        //       .catch(err => console.log(err));
        //   }
    }
    return (
        <div className="container">
            <div className="col-6">
                <form className="form-group">
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
                        We'll never share your email with anyone else.
                    </small>
                </form>
                <form>
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!(formObject.email && formObject.password)}
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default UserLogin;
