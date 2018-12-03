import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <Router>
    <div className="Footer green">
      <Link to="/chat">
        <footer className="page-footer transparent">
          <h5>Ask a yocal!</h5>
        </footer>
      </Link>
    </div>
  </Router>
);

export default Footer;
