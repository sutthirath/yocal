import React from "react";
import Axios from "axios";

class Favorites extends React.Component {
  // This does a post request
  handleTest(e) {
    Axios.post("/favorites", {
      id: e,
      venueId: this.props.venue.id,
      name: this.props.venue.name,
      city: this.props.venue.location.city,
      state: this.props.venue.location.state,
      photo: `${this.props.venue.bestPhoto.prefix}150x150${
        this.props.venue.bestPhoto.suffix
      }`
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Favorites">
        <button
          className="btn amber"
          onClick={() => this.handleTest(this.props.user._id)}
        >
          Save to Favorites
        </button>
      </div>
    );
  }
}

export default Favorites;
