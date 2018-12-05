import React from "react";
import Axios from "axios";

class Favorites extends React.Component {
  // This does a post request
  handleTest(e) {
    Axios.post("/favorites", {
      id: e,
      venueId: "IT WORKS!!!"
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleTest2() {
    Axios.get("/favorites").then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="Favorites">
        <button onClick={() => this.handleTest(this.props.user._id)}>
          TEST BUTTON
        </button>
        <button onClick={this.handleTest2}>TEST 2 BUTTON</button>
      </div>
    );
  }
}

export default Favorites;
