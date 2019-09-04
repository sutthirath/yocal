import React from "react";
import Axios from "axios";
import moment from "moment";

import Favorites from "../components/Favorites";
import BackBtn from "../components/BackBtn";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {
        bestPhoto: {
          prefix: "",
          suffix: ""
        },
        location: {
          formattedAddress: []
        }
      }
    };
  }

  getDetails() {
    Axios.get(
      `https://api.foursquare.com/v2/venues/${
        this.props.currentPlace
      }?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_CLIENT_SECRET
      }&v=${moment(new Date()).format("YYYYMMDD")}`
    ).then(res => {
      this.setState({
        venue: res.data.response.venue
      });
    });
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    const detail = this.state.venue;
    console.log(detail);

    return (
      <div className="conatiner">
        <BackBtn />
        <div className="card" style={styles.details}>
          <div className="card-image">
            <img
              src={`${detail.bestPhoto.prefix}150x150${detail.bestPhoto.suffix}`}
              alt=""
            />
            <span className="card-title">{detail.name}</span>
          </div>
          <div className="card-content">
            {/* Description here */}
            {detail.location.formattedAddress.map((address, idx) => {
              return <p key={idx}>{address}</p>;
            })}
          </div>
          <div className="card-action center">
            <Favorites venue={detail} user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  details: {
    height: "81vh",
    width: "100vw",
    top: "6em"
  }
};

export default Details;
