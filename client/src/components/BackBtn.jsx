import React from "react";
import { Link } from "react-router-dom";

const BackBtn = () => (
  <Link to="/">
    <div className="BackBtn left">
      <button className="btn amber" style={styles.back}>
        <i className="material-icons large center">chevron_left</i>
      </button>
    </div>
  </Link>
);

const styles = {
  back: {
    borderRadius: "50px",
    boxShadow: "1px 1px 1px lightgrey",
    color: "white",
    height: "50px",
    width: "50px"
  }
};

export default BackBtn;
