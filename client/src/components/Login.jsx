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
        <h3>Welcome back adventurer!</h3>
        {errorPanel}
        <div style={styles.formContainer}>
          <form
            onSubmit={this.handleSubmit}
            className="col"
            style={styles.form}
          >
            <div className="input-field col" style={styles.input}>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  className="validate"
                  name="l-email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <label htmlFor="l-email">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input
                  className="validate"
                  name="l-password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <label htmlFor="l-password">Password</label>
              </div>
            </div>
            <button
              className="waves-effect btn-large btn"
              style={styles.button}
              type="submit"
            >
              Log In
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
    display: "flex",
    justifyContent: "center"
  },
  form: {
    width: "40%"
  },
  input: {
    backgroundColor: "white",
    padding: "30px"
  },
  button: {
    backgroundColor: "rgb(63, 63, 63)"
  }
};

export default Login;
