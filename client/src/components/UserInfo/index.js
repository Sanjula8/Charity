// import React, { useState, useEffect } from "react";

// function UserInfo() {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     fetch("/api/user_data", {
//       method: "GET",
//       credentials: "same-origin",
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         setUser(response);
//       });
//   }, []);

//   return (
//     <div className="card" style="width: 18rem;">
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5>
//           <span
//             className="card-title"
//             style={{ color: "green", fontFamily: "Pacifico, cursive" }}>
//             {user.firstName} {user.lastName}
//           </span>
//         </h5>
//         <p className="card-text"></p>
//       </div>
//       <ul className="list-group list-group-flush">
//         <li className="list-group-item">{user.email}</li>
//         <li className="list-group-item">{user.city}</li>
//         <li className="list-group-item">{user.state}</li>
//       </ul>
//       <div className="card-body"></div>
//     </div>
//   );
// }

// export default UserInfo;
