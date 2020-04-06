import React, { Component } from "react";
import MembersNav from "../components/MembersNav/index";
import { CharityCard } from "../components/CharitySearch/CharityCard";

class Profile extends Component {
  state = {
    userdata: {},
    selectedCharities: [],
  };

  componentDidMount() {
    fetch("/bananas")
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
        <div className="row">
          {this.state.selectedCharities.length ? (
            this.state.selectedCharities.map((charityItem) => {
              return (
                <div className="col-4">
                  <CharityCard selectedCharity={charityItem} />
                </div>
              );
            })
          ) : (
            <h1>nothing yet</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
