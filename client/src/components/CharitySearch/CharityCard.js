import React, { useState } from "react";
import "../CharitySearch/index.css";

export function CharityCard({ selectedCharity }) {
	const [donationToggle, setDonationToggle] = useState("none");

	function toggleDonation(event) {
		if (donationToggle === "flex") setDonationToggle("none");
		else setDonationToggle("flex");
	}
	function donationStyle() {
		return {
			display: donationToggle
		};
	}

	function SaveCard() {
		fetch("/api/charity/", {
			method: "POST",
			body: JSON.stringify(),
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			}
		});
	}

	function renderCharityCard() {
		return (
			<div className="card scroll" style={{ width: "500" }}>
				<div className="card-body">
					<h2 className="card-title">
						{selectedCharity.charityName}
					</h2>
					<hr></hr>
					<h5 className="card-subtitle mb-2 text-muted">
						Ein Numer:{selectedCharity.ein}
					</h5>
					<h5 className="card-subtitle mb-2 text-muted">
						Mission Statement:
					</h5>
					<p className="card-text">{selectedCharity.mission}</p>
					<h5 className="card-subtitle mb-2 text-muted">
						Website URL:
					</h5>
					<p className="card-text">{selectedCharity.websiteURL}</p>
					<h5 className="card-subtitle mb-2 text-muted">
						Physical Address:
					</h5>
					<hr></hr>
					<p className="card-text">{selectedCharity.mission}</p>
					<div className="row">
						<button
							className="btn btn-success mx-3 my-3"
							onClick={toggleDonation}
						>
							Donate
						</button>
						<button
							onClick={SaveCard}
							className="btn btn-secondary mx-3 my-3"
						>
							Save
						</button>
						<button className="btn btn-info mx-3 my-3">
							Volunteer
						</button>
					</div>
					<div className="row" style={donationStyle()}>
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
		);
	}

	if (Object.keys(selectedCharity).length !== 0) return renderCharityCard();
	else return null;
}
