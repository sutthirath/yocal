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
        <div style={styles.formContainer}>
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <div className="input-field col" style={styles.input}>
              <div className="input-field col s6">
                <i className="material-icons prefix">person</i>
                <input
                  name="s-name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <label htmlFor="s-name">Full Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  name="s-email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <label htmlFor="s-email">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input
                  name="s-password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <label htmlFor="s-password">Password</label>
              </div>
            </div>
            <div>
              <p>Password must meet these requirements:</p>
              <ul style={styles.list}>
                <li
                  style={
                    this.state.password.length >= 8 &&
                    this.state.password.length <= 128
                      ? styles.green
                      : styles.red
                  }
                >
                  Character length (8 to 128): currently (
                  {this.state.password.length})
                </li>
                <li style={this.state.passHasCap ? styles.green : styles.red}>
                  Contain at least one uppercase letter (A-Z)
                </li>
                <li style={this.state.passHasLow ? styles.green : styles.red}>
                  Contain at least one lowercase letter (a-z)
                </li>
                <li style={this.state.passHasDig ? styles.green : styles.red}>
                  Contain at least one digit (0-9)
                </li>
                <li style={this.state.passHasPunc ? styles.green : styles.red}>
                  Contain at least one special character (punctuation)
                </li>
              </ul>
            </div>
            <button
              className="waves-effect btn-large btn"
              style={styles.button}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
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
    textAlign: "center"
  },
  formContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  form: {
    width: "40%"
  },
  input: {
    backgroundColor: "white",
    padding: "20px 30px"
  },
  list: {
    listStyleType: "none",
    textAlign: "left"
  },
  red: {
    backgroundColor: "tomato",
    paddingLeft: "10px"
  },
  green: {
    backgroundColor: "yellowgreen",
    paddingLeft: "10px"
  },
  button: {
    backgroundColor: "rgb(63, 63, 63)"
  }
};

export default Signup;
