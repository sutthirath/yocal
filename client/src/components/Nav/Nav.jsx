import React from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";

const Nav = props => (
  <nav className="Nav transparent z-depth-0">
    <ul>
      <Link to="/">
        <li className="brand-logo left">yocal</li>
      </Link>
      <li className="right">
        <UserProfile user={props.user} logout={props.logout} />
      </li>
    </ul>
  </nav>
);

export default Nav;
