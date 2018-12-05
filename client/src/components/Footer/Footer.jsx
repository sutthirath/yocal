import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <div className="Footer">
    <footer className="page-footer transparent">
      <ul>
        <Link to="/myplaces">
          <li className="myPlacesBtn left">My Places</li>
        </Link>
        <Link to="/chat">
          <li className="chatBtn right">Chat</li>
        </Link>
      </ul>
    </footer>
  </div>
);

export default Footer;
