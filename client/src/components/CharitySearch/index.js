import React, { useState, useEffect } from "react";
var axios = require("axios");

function CharitySearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharity, setSelectedCharity] = useState({});
  //   const [donationToggle, setDonationToggle] = useState("");

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearch(value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const result = await axios(`/api/charity/${search}`);
    setData(result.data);
  }

  async function handleSelected(ein) {
    const result = await axios(`/api/charity/id/${ein}`);
    setSelectedCharity(result.data);
  }

  //   function toggleDonation(event) {
  //     if (donationToggle === "flex") setDonationToggle("none");
  //     else setDonationToggle("flex");
  //   }

  //   function donationStyle() {
  //     return {
  //       display: donationToggle
  //     };
  //   }

  return (
    <div>
      <div className="container">
        <div className="row-md-12 justify-content-center">
          <h5>Search for a Charity</h5>
        </div>
        <div className="row-md-12 justify-content-center">
          <h5>Enter a cause you want to support!</h5>
        </div>
        <div className="row justify-content-center">
          <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
              type="text"
              name="search"
              onChange={handleSearchChange}
            />

            <button
              className="btn btn-secondary my-2"
              type="submit"
              onClick={handleFormSubmit}
            >
              Search
            </button>
          </form>
        </div>

        <div className="row">
          <div className="col-6">
            <ul className="list-group pt-4">
              {data.map(item => (
                <li className="list-group-item">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={event => handleSelected(item.ein)}
                    data-ein={item.ein}
                  >
                    {item.charityName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className=" col-6 p-4">
            <div className="card" style={{ width: "500" }}>
              <div className="card-body">
                <h2 className="card-title">{selectedCharity.charityName}</h2>
                <hr></hr>
                <h5 className="card-subtitle mb-2 text-muted">
                  Ein Numer:{selectedCharity.ein}
                </h5>
                <h5 className="card-subtitle mb-2 text-muted">
                  Mission Statement:
                </h5>
                <p className="card-text">{selectedCharity.mission}</p>
                <h5 className="card-subtitle mb-2 text-muted">Website URL:</h5>
                <p className="card-text">{selectedCharity.websiteURL}</p>
                <h5 className="card-subtitle mb-2 text-muted">
                  Physical Address:
                </h5>
                <hr></hr>
                <p className="card-text">{selectedCharity.mission}</p>
                <div className="row">
                  <button
                    className="btn btn-success mx-3 my-3"
                    // onClick={toggleDonation}
                    name="false"
                  >
                    Donate
                  </button>
                  <button className="btn btn-secondary mx-3 my-3">Save</button>
                  <button className="btn btn-info mx-3 my-3">Volunteer</button>
                </div>
                {/* <div className="row" style={donationStyle}> */}
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="inlineFormInputGroup"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharitySearch;
