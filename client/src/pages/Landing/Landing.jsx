import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = props => (
  <div className="Landing">
    <div className="HeroImg">
      <img src="../../../images/yocal_hero.png" alt="yocal_hero" />
    </div>
    <div className="landingBtn">
      <Link to="/login">
        <button className="LogInBtn">Log In</button>
      </Link>
      <Link to="/signup">
        <button className="SignUpBtn">Sign Up</button>
      </Link>
    </div>
  </div>
);

export default Landing;
