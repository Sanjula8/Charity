// import React, { Component } from "react";
// import MembersNav from "../components/MembersNav/index";
// import { CharityCard } from "./CharityCard";

// class Profile extends Component {
//   constructor() {
//     this.state = {
//       userdata,
//       selectedCharities,
//     };
//   }

//   componentWillMount() {
//     fetch("api/profile/charity-card")
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           userdata: data.userdata,
//           selectedCharities: data.charitydata,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <MembersNav />
//         <div className="row">
//           {selectedCharities.map((charityItem) => {
//             return (
//               <div className="col-4">
//                 <CharityCard selectedCharity={charityItem} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;
