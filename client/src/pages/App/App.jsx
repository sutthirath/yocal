import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Landing from "../Landing/Landing";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from "../Main/Main";
import { Chat } from "../Chat/Chat";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      user: null,
      error: null,
      lockedResult: ""
    };
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.logout = this.logout.bind(this);
    this.liftTokenToState = this.liftTokenToState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    });
  }

  handleClick(e) {
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.state.token;
    axios.get("/locked/test").then(result => {
      this.setState({
        lockedResult: result.data
      });
    });
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem("mernToken");
    // Remove the user info from the state
    this.setState({
      token: "",
      user: null
    });
  }

  checkForLocalToken() {
    // Look in local storage for the token
    let token = localStorage.getItem("mernToken");
    if (!token || token === "undefined") {
      // There was no token
      localStorage.removeItem("mernToken");
      this.setState({
        token: "",
        user: null
      });
    } else {
      // We did find a token in localStorage
      // Send it to the back to be verified
      axios
        .post("/auth/me/from/token", {
          token
        })
        .then(result => {
          if (result.data.type !== "success") {
            this.setState({
              error: result.data
            });
          } else {
            // Put the token in localStorage
            localStorage.setItem("mernToken", result.data.token);
            this.setState({
              token: result.data.token,
              user: result.data.user
            });
          }
        });
    }
  }

  componentDidMount() {
    this.checkForLocalToken();
  }

  render() {
    let user = this.state.user;
    if (user) {
      return (
        <div className="App">
          <Nav user={user} logout={this.logout} />
          <Main />
          <Footer />
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route
                exact
                path="/login"
                render={() => <Login liftToken={this.liftTokenToState} />}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup liftToken={this.liftTokenToState} />}
              />
              <Route exact path="/chat" render={() => <Chat />} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
