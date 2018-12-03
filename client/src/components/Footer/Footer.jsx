import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <div className="Footer green" onClick={() => window.location.reload()}>
    <Link to="/chat">
      <footer className="page-footer transparent">
        <h5>Ask a yocal!</h5>
      </footer>
    </Link>
  </div>
);

export default Footer;
