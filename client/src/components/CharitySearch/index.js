import React from "react";

function CharitySearch() {
	return (
		<div>
			<div className="container">
				<div className="card">
					<h5 className="card-header">Search for a Charity</h5>
					<div className="card-body">
						<h5 className="card-title">
							Enter a cause you want to support!
						</h5>
						<form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
							<i className="fas fa-search" aria-hidden="true"></i>
							<input
								className="form-control form-control-sm ml-3 w-75"
								type="text"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-primary ml-2">
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CharitySearch;
