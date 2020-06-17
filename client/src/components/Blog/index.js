import React from "react";

function Blog() {
	return (
		<div className="card-deck pr-5">
			<div className="card">
				{/* <img src="..." className="card-img-top" alt="..." /> */}
				<div className="card-body">
					<h5 className="card-title">COVID-19 Update</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc aliquet diam tortor, id consequat mauris
						ullamcorper eu. Orci varius natoque penatibus et magnis
						dis parturient montes, nascetur ridiculus mus.
						Pellentesque et dui id justo finibus sollicitudin at et
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						Last updated 3 months ago
					</small>
				</div>
			</div>
		</div>
	);
}

export default Blog;
