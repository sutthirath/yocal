import React, { Component } from "react";
import axios from "axios";

import ErrorPanel from "../ErrorPanel";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passHasCap: false,
      passHasLow: false,
      passHasDig: false,
      passHasPunc: false,
      error: null
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    if (e.target.value.match(/[A-Z]/g)) {
      this.setState({
        passHasCap: true
      });
    } else {
      this.setState({
        passHasCap: false
      });
    }
    if (e.target.value.match(/[a-z]/g)) {
      this.setState({
        passHasLow: true
      });
    } else {
      this.setState({
        passHasLow: false
      });
    }
    if (e.target.value.match(/\d/g)) {
      this.setState({
        passHasDig: true
      });
    } else {
      this.setState({
        passHasDig: false
      });
    }
    // eslint-disable-next-line no-useless-escape
    if (e.target.value.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)) {
      this.setState({
        passHasPunc: true
      });
    } else {
      this.setState({
        passHasPunc: false
      });
    }
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password.length < 10 || this.state.password > 99) {
      // Password does not meet length requirements
      this.setState({
        error: {
          type: "auth_error",
          status: 401,
          message: "Password must be between 10 and 128 characters."
        },
        password: "",
        passHasCap: false,
        passHasLow: false,
        passHasDig: false,
        passHasPunc: false
      });
    } else if (
      !(
        this.state.passHasCap &&
        this.state.passHasLow &&
        this.state.passHasDig &&
        this.state.passHasPunc
      )
    ) {
      // Password does not meet complexity requirements
      this.setState({
        error: {
          type: "auth_error",
          status: 401,
          message: "Password not strong enough. Please meet requirements below."
        },
        password: "",
        passHasCap: false,
        passHasLow: false,
        passHasDig: false,
        passHasPunc: false
      });
    } else {
      axios
        .post("/auth/signup", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(result => {
          if (result.data.type.includes("error")) {
            this.setState({
              error: result.data,
              email: "",
              password: "",
              passHasCap: false,
              passHasLow: false,
              passHasDig: false,
              passHasPunc: false
            });
          } else {
            localStorage.setItem("mernToken", result.data.token);
            this.props.liftToken(result.data);
          }
        })
        .catch(err => {
          // This block catches the rate limit errors
          this.setState({
            error: {
              type: "rate_error",
              status: 429,
              message: "Maximum accounts exceeded. Please try again later."
            }
          });
        });
    }
  }

  render() {
    let errorPanel = this.state.error ? (
      <ErrorPanel error={this.state.error} />
    ) : (
      ""
    );
    return (
      <div className="Signup" style={styles.container}>
        <h3>Create a new account:</h3>
        {errorPanel}
        <form onSubmit={this.handleSubmit}>
          <div className="input-box" style={styles.inputBox}>
            <div className="left-col" style={styles.leftCol}>
              <label htmlFor="s-name">Name:</label>
            </div>
            <div className="right-col">
              <input
                name="s-name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-email">Email:</label>
            </div>
            <div className="right-col" style={styles.rightCol}>
              <input
                name="s-email"
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="left-col">
              <label htmlFor="s-password">Password:</label>
            </div>
            <div className="right-col">
              <input
                name="s-password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
          </div>
          <div>
            <p>Password must meet these requirements:</p>
            <ul>
              <li
                style={
                  this.state.password.length > 9 &&
                  this.state.password.length < 129
                    ? styles.green
                    : styles.red
                }
              >
                Length (10 to 128): {this.state.password.length}
              </li>
              <li style={this.state.passHasCap ? styles.green : styles.red}>
                Contain 1+ uppercase letter (A-Z)
              </li>
              <li style={this.state.passHasLow ? styles.green : styles.red}>
                Contain 1+ lowercase letter (a-z)
              </li>
              <li style={this.state.passHasDig ? styles.green : styles.red}>
                Contain 1+ digit (0-9)
              </li>
              <li style={this.state.passHasPunc ? styles.green : styles.red}>
                Contain 1+ special character (punctuation)
              </li>
            </ul>
          </div>
          <input
            className="btn transparent signupBtn"
            style={styles.signupBtn}
            type="submit"
            value="Sign Up!"
          />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "inline-block",
    backgroundColor: "#fcd411",
    width: "100vw",
    height: "100vh",
    padding: "0",
    margin: "0"
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
  red: {
    backgroundColor: "Tomato",
    listStyleType: "none",
    margin: "0.1em",
    padding: "0.1em"
  },
  green: {
    backgroundColor: "YellowGreen",
    listStyleType: "none",
    margin: "0.1em",
    padding: "0.1em"
  },
  signupBtn: {
    border: "1px solid white"
  }
};

export default Signup;
