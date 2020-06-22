import React from "react";
import { NavLink } from "react-router-dom";

import "../Styling/Header.css";

function Header() {
  return (
    <div id="navLinkContainer">
      <NavLink to="/" className="navLink" activeClassName="navLinkActive" exact={true}>
        Home
      </NavLink>
      <NavLink to="/explore" className="navLink" activeClassName="navLinkActive">Explore</NavLink>
    </div>
  );
}

export default Header;
