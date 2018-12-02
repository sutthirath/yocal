import React from "react";
import { UserProfile } from "../UserProfile/UserProfile";

const Nav = props => (
  <nav className="Nav transparent z-depth-0">
    <ul>
      <li className="brand-logo left">yocal</li>
      <li className="right">
        <UserProfile user={props.user} logout={props.logout} />
      </li>
    </ul>
  </nav>
);

export default Nav;
