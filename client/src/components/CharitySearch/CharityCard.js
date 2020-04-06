import React, { useState, useEffect } from "react";
import "../CharitySearch/index.css";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var todayDate = dd + "/" + mm + "/" + yyyy;

export function CharityCard({ selectedCharity }) {
  const [donationToggle, setDonationToggle] = useState("none");
  const [donationValue, setDonationValue] = useState(0);
  const [volunteer, setVolunteer] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);
  // const [deleteCard, setDeleteCard] = useState([]);

  useEffect(() => {
    fetch("/api/charity/save", {
      method: "POST",
      body: JSON.stringify({
        charityName: selectedCharity.charityName,
        ein: selectedCharity.ein,
        donation: parseInt(donationValue),
        volunteer: volunteer,
      }),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTotalDonation(response.newDonation);
      });
  }, []);

  function toggleDonation(event) {
    if (donationToggle === "flex") setDonationToggle("none");
    else setDonationToggle("flex");
  }
  function donationStyle() {
    return {
      display: donationToggle,
    };
  }

  function toggleVolunteer(event) {
    if (event.target.checked) setVolunteer(true);
    else setVolunteer(false);
  }

  function getDonationValue(event) {
    //event.target.value
    const { value } = event.target;
    setDonationValue(value);
  }

  // function deleteCard(event) {
  //   //event.target.value
  //   const { value } = event.target;
  //   setDeleteCard(value);
  // }

  function deleteCard(event) {
    event.preventDefault();
    fetch("/api/charity/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id: req.body.id,
      }),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function SaveBtn(event) {
    event.preventDefault();
    fetch("/api/charity/save", {
      method: "POST",
      body: JSON.stringify({
        charityname: selectedCharity.charityName,
        ein: selectedCharity.ein,
        donation: 0,
        volunteer: volunteer,
      }),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  function DonateBtn(event) {
    event.preventDefault();
    fetch("/api/charity/save", {
      method: "POST",
      body: JSON.stringify({
        charityName: selectedCharity.charityName,
        ein: selectedCharity.ein,
        donation: parseInt(donationValue),
        volunteer: volunteer,
      }),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTotalDonation(response.newDonation);
      });
  }

  function renderCharityCard({ selectedCharity }) {
    return (
      <div className="card scroll" style={{ width: "100%", height: "auto" }}>
        <div className="card-body">
          <h2 className="card-title">{selectedCharity.charityName}</h2>
          <hr></hr>
          <h5 className="card-subtitle mb-2 text-muted">
            Ein Numer:{selectedCharity.ein}
          </h5>
          <h5 className="card-subtitle mb-2 text-muted">Mission Statement:</h5>
          <p className="card-text">{selectedCharity.mission}</p>
          <h5 className="card-subtitle mb-2 text-muted">Website URL:</h5>
          <p className="card-text">{selectedCharity.websiteURL}</p>
          <h5 className="card-subtitle mb-2 text-muted">Physical Address:</h5>
          <hr></hr>
          <p className="card-text">{selectedCharity.mission}</p>
          <div className="row justify-content-start d-inline-flex w-100">
            <div className="col-sm-10">
              <h5 style={{ color: "green" }}>
                Yes, I would you like to volunteer!
              </h5>
            </div>
            <div className="col-sm-2">
              <input
                type="checkbox"
                className="form-control"
                onChange={toggleVolunteer}
              />
            </div>
          </div>
          <div className="row">
            <button
              className="btn btn-success mx-3 my-3"
              onClick={toggleDonation}>
              Donate
            </button>
            <button onClick={SaveBtn} className="btn btn-secondary mx-3 my-3">
              Save
            </button>
            <hr></hr>
            <br></br>
          </div>
          <div className="row" style={donationStyle()}>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input
                onChange={getDonationValue}
                type="text"
                className="form-control"
                name="donationValue"
                placeholder="Enter Amount"
              />
              <input
                type="submit"
                className="form-control"
                value="Confirm your donation"
                onClick={DonateBtn}
              />
            </div>
          </div>
          <div className="row " style={donationStyle()}>
            <ul className="list-group">
              <li className="list-item" id="addedDonation">
                <span style={{ fontSize: "15pt" }}>{todayDate}</span>You
                donated: $
                <span style={{ fontSize: "15pt" }}>{donationValue}</span>
              </li>
              <li className="list-item">
                <span id="totalDonation" style={{ fontSize: "20pt" }}>
                  Your total donations: ${totalDonation}
                </span>
              </li>
            </ul>
            <button type="button" value="delete" onClick={deleteCard}>
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (Object.keys(selectedCharity).length !== 0)
    return renderCharityCard({ selectedCharity });
  else return null;
}
