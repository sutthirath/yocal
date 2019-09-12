import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Landing from "./pages/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import { Chat } from "./pages/Chat";
import FavoriteList from "./pages/FavoriteList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      user: null,
      error: null,
      lockedResult: "",
      title: "See What's Nearby:",
      search: "",
      latitude: null,
      longitude: null,
      places: [],
      currentPlace: null
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

  // Takes user's input and calls fetch
  handleSearch = input => {
    this.setState({
      search: input,
      title: `Results for "${input}"`
    });

    fetch(
      `https://api.foursquare.com/v2/venues/search?query=${input}&ll=${
        this.state.latitude
      },${this.state.longitude}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=${moment(
        new Date()
      ).format("YYYYMMDD")}`
    )
      .then(response => response.json())
      .then(place => this.setState({ places: place.response.venues }));
  };

  // Gets the venue id of div clicked
  handleVenue = e => {
    this.setState({
      currentPlace: e
    });
  };

  // Lifts the favorites venue ID to currentPlace
  handleFavoriteVenue = e => {
    this.setState({
      currentPlace: e
    });
  };

  componentDidMount() {
    this.checkForLocalToken();

    const context = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      context.setState({
        latitude: lat,
        longitude: lon
      });

      fetch(
        `https://api.foursquare.com/v2/venues/search?ll=${lat},${lon}&client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=${moment(
          new Date()
        ).format("YYYYMMDD")}`
      )
        .then(response => response.json())
        .then(place => context.setState({ places: place.response.venues }));
    });
  }

  render() {
    let user = this.state.user;
    if (user) {
      return (
        <Router>
          <div className="App" styles={styles.container}>
            <Nav user={this.state.user} logout={this.logout} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <Search handleSearch={this.handleSearch} />
                    <Main
                      places={this.state.places}
                      title={this.state.title}
                      lat1={this.state.latitude}
                      lon1={this.state.longitude}
                      handleVenue={this.handleVenue}
                    />
                    <Footer />
                  </div>
                )}
              />
              <Route
                exact
                path="/chat"
                render={() => <Chat user={this.state.user} />}
              />
              <Route
                exact
                path="/details"
                render={() => (
                  <Details
                    user={this.state.user}
                    currentPlace={this.state.currentPlace}
                  />
                )}
              />
              <Route
                exact
                path="/myplaces"
                render={() => (
                  <FavoriteList
                    handleFavoriteVenue={this.handleFavoriteVenue}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App" styles={styles.container}>
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
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#fcd411",
    height: "100vh",
    width: "100vw"
  }
};

export default App;
