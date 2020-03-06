import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <div className="nav-container">
      <span className="nav-element">Welcome, {props.user.name}</span>
      <Link to="" onClick={props.handleLogout} className='nav-element'>
        Log Out
      </Link>
    </div>
  ) : (
    <div className="nav-container">
      <Link to="/login" className="nav-element">
        Log In
      </Link>
      <Link to="/signup" className="nav-element">
        Sign Up
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

// const NavBar = props => {
//   let nav = props.user ? (
//     <div>
//       <Link to="" onClick={props.handleLogout} className="nav-element">
//         LOG OUT
//       </Link>
//     </div>
//   ) : (
//     <div id="nav-container">
//       <Link className="nav-element" to="/login">
//         Log In
//       </Link>
//       <Link className="nav-element" to="/signup">
//         Sign Up
//       </Link>
//     </div>
//   );

//   return <div>{nav}</div>;
// };

export default NavBar;
