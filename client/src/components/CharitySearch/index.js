import React, { useState, useEffect } from "react";
var axios = require("axios");

function CharitySearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharity, setSelectedCharity] = useState({});

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

  return (
    <div>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Search for a Charity</h5>
          <div className="card-body">
            <h5 className="card-title">Enter a cause you want to support!</h5>
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
                className="btn btn-primary ml-2"
                type="submit"
                onClick={handleFormSubmit}
              >
                Search
              </button>
            </form>
            <ul className="list-group col-6 pt-4">
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
        </div>
      </div>
    </div>
  );
}

export default CharitySearch;
