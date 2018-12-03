import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <Router>
    <div className="Footer">
      <footer className="page-footer grey">
        <Link to="/chat">
          <button className="btn">Chat!</button>
        </Link>
      </footer>
    </div>
  </Router>
);

export default Footer;
