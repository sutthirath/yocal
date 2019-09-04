import React from "react";
import { Link } from "react-router-dom";

const BackBtn = () => (
  <Link to="/">
    <div className="BackBtn left">
      <i className="material-icons center" style={styles.back}>
        chevron_left
      </i>
    </div>
  </Link>
);

const styles = {
  back: {
    borderRadius: "50px",
    boxShadow: "1px 1px #3d3d3d",
    border: "1px solid white",
    color: "white",
    fontSize: "50px",
    height: "50px",
    width: "50px",
    marginLeft: "12px",
    marginTop: "20px"
  }
};

export default BackBtn;
