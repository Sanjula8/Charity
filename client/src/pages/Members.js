import React from "react";
import MembersBar from "../components/MembersNav/index";
import CharitySearch from "../components/CharitySearch/index";
// import './App.css';

function Members() {
  fetch("/api/firstname", {
    method: "GET",
    credentials: "same-origin"
  }).then(response => {
    console.log(response);
  });

  return (
    <div>
      <MembersBar />
      <div className="container">
        <div className="text-center">
          <h1>
            {/* Welcome to CharityHub><span>{formObject.firstName}</span> */}
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

// $.get("/api/user_data").then(function (data) {
//     $(".member-name").text(data.email);
//   });
