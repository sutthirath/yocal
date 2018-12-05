import React from "react";
import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = () => (
  <Link to="/">
    <div className="BackBtn left">
      <i className="material-icons back center">chevron_left</i>
    </div>
  </Link>
);

export default BackBtn;
