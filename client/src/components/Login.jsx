import React, { Component } from "react";
import axios from "axios";

import ErrorPanel from "../ErrorPanel";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(result => {
        if (result.data.type.includes("error")) {
          // The response we got was an error
          this.setState({
            error: result.data
          });
        } else {
          localStorage.setItem("mernToken", result.data.token);
          this.props.liftToken(result.data);
          this.setState({
            error: null
          });
        }
      })
      .catch(err => {
        // This block catches the rate limit errors
        this.setState({
          error: {
            type: "rate_error",
            status: 429,
            message: "Maximum login attempts exceeded. Please try again later."
          },
          email: "",
          password: ""
        });
      });
  }

  render() {
    let errorPanel = this.state.error ? (
      <ErrorPanel error={this.state.error} />
    ) : (
      ""
    );
    return (
      <div className="Login" style={styles.container}>
        <h3>Log in:</h3>
        {errorPanel}
        <form onSubmit={this.handleSubmit}>
          <div className="input-box" style={styles.inputBox}>
            <div className="left-col" styles={styles.leftCol}>
              <label htmlFor="l-email">Email:</label>
            </div>
            <div className="right-col" styles={styles.rightCol}>
              <input
                name="l-email"
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="l-password">Password:</label>
            </div>
            <div className="right-col">
              <input
                name="l-password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
          </div>
          <input
            className="transparent btn"
            style={styles.loginBtn}
            type="submit"
            value="Log In!"
          />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "inline-block",
    border: "1px solid darkgray",
    width: "90vw",
    padding: "1rem",
    margin: "1rem"
  },
  inputBox: {
    margin: "0.4rem"
  },
  leftCol: {
    display: "inline-block",
    textAlign: "right",
    padding: "0.3em",
    width: "22%"
  },
  rightCol: {
    display: "inline-block",
    textAlign: "left",
    padding: "0.3em",
    width: "35%"
  },
  loginBtn: {
    border: "1px solid white"
  }
};

export default Login;
