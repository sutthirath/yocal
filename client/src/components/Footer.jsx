import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="Footer" style={styles.conatiner}>
    <footer className="page-footer transparent" style={styles.pageFooter}>
      <ul>
        <Link to="/myplaces">
          <li className="left" style={styles.myPlacesBtn}>
            My Places
          </li>
        </Link>
        <Link to="/chat">
          <li className="right" style={styles.chatBtn}>
            Chat
          </li>
        </Link>
      </ul>
    </footer>
  </div>
);

const styles = {
  conatiner: {
    margin: "0 auto",
    display: "inline",
    color: "black"
  },
  pageFooter: {
    padding: 0,
    margin: 0
  },
  myPlacesBtn: {
    width: "49vw"
  },
  chatBtn: {
    width: "49vw"
  }
};

export default Footer;
