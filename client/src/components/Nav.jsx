import React from "react";
import { Link } from "react-router-dom";

import { UserProfile } from "./UserProfile";

const Nav = props => (
  <nav className="Nav z-depth-0" style={styles.container}>
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

const styles = {
  container: {
    backgroundColor: "#fcd411"
  }
};

export default Nav;
