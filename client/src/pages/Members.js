import React, { useState, useEffect } from "react";
import MembersBar from "../components/MembersNav/index";
import CharitySearch from "../components/CharitySearch/index";
// import './App.css';

function Members() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/api/user_data", {
      method: "GET",
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(response => {
        setUser(response);
      });
  }, []);

  return (
    <div>
      <MembersBar />
      <div className="container">
        <div className="text-center">
          <h1>
            Welcome to CharityHub
            <span>
              {user.firstName} {user.lastName}
            </span>
          </h1>
        </div>
        <div>
          <CharitySearch />
        </div>
      </div>
    </div>
  );
}

export default Members;
