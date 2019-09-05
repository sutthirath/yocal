import React from "react";
import { Link } from "react-router-dom";

import hero from "../images/busy-street.jpg";
import icon from "../images/icon.svg";

const Landing = props => (
  <div style={styles.container}>
    <img src={icon} style={styles.icon} alt="busy street with lots of people" />
    <div style={styles.landingBtn}>
      <Link to="/login">
        <button
          className="btn btn-large waves-effect left"
          style={styles.logInBtn}
        >
          Log In
        </button>
      </Link>
      <Link to="/signup">
        <button
          className="btn btn-large waves-effect right"
          style={styles.signUpBtn}
        >
          Sign Up
        </button>
      </Link>
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#fcd411",
    zIndex: "0"
  },
  icon: {
    display: "flex",
    maxWidth: "20em",
    position: "absolute",
    zIndex: "1"
  },
  landingBtn: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: "1"
  },
  logInBtn: {
    backgroundColor: "rgb(63, 63, 63)"
  },
  signUpBtn: {
    backgroundColor: "#fcd411"
  }
};

export default Landing;
