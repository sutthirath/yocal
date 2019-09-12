import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="Footer" style={styles.container}>
    <footer className="page-footer" style={styles.pageFooter}>
      <Link to="/myplaces">
        <div style={styles.center}>
          <p>My Places</p>
        </div>
      </Link>
      <Link to="/chat">
        <div style={styles.center}>
          <p>Chat</p>
        </div>
      </Link>
    </footer>
  </div>
);

const styles = {
  container: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0"
  },
  pageFooter: {
    margin: "0",
    padding: "0",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgb(63, 63, 63)"
  },
  center: {
    textAlign: "center",
    color: "white"
  }
};

export default Footer;
