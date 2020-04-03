import React, { useState } from "react";
var axios = require("axios");

export function SearchBar({ setData }) {
	const [search, setSearch] = useState("");
	function handleSearchChange(event) {
		const { value } = event.target;
		setSearch(value);
	}
	async function handleFormSubmit(event) {
		event.preventDefault();
		const result = await axios(`/api/charity/${search}`);
		setData(result.data);
	}
	return (
		<>
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
		</>
	);
}
