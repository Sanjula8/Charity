import React, { Component } from "react";
import MembersNav from "../components/MembersNav/index";
import Footer from "../components/Footer/index";
import { ProfileCard } from "../components/CharitySearch/ProfileCard";
import UserInfo from "../components/UserInfo";

class Profile extends Component {
	state = {
		userdata: {},
		selectedCharities: [],
	};

	componentDidMount() {
		fetch("/getcharity")
			.then((res) => res.json())
			.then((data) => {
				console.log("Data", data);
				this.setState({
					//   userdata: data.userdata,
					selectedCharities: data,
				});
			});
	}

	render() {
		return (
			<div>
				<MembersNav />
				<div className="container" style={{ width: "300px" }}>
					<UserInfo />
				</div>
				<div className="container" id="profile-container">
					<div className="row mt-5">
						{this.state.selectedCharities.length ? (
							this.state.selectedCharities.map((charityItem) => {
								return (
									<div className="col-4">
										<ProfileCard
											selectedCharity={charityItem}
										/>
									</div>
								);
							})
						) : (
							<Footer />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
