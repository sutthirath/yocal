import React from "react";
import Axios from "axios";
// import Favorites from "../../components/Favorites/Favorites";

class Details extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://api.foursquare.com/v2/venues/${this.props.currentPlace}`
    );
  }

  render() {
    return (
      <div className="Details">
        <h3>Details Page</h3>
      </div>
    );
  }
}

export default Details;
