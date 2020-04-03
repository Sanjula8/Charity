import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { CharityCard } from "./CharityCard";
import "../CharitySearch/index.css";
var axios = require("axios");

function CharitySearch() {
	const [data, setData] = useState([]);
	const [selectedCharity, setSelectedCharity] = useState({});

	async function handleSelected(ein) {
		const result = await axios(`/api/charity/id/${ein}`);
		setSelectedCharity(result.data);
	}

	return (
		<div className="container">
			<SearchBar setData={setData} />
			<div className="row">
				<div className="col-6 scroll">
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
					<CharityCard selectedCharity={selectedCharity} />
				</div>
			</div>
		</div>
	);
}

export default CharitySearch;
