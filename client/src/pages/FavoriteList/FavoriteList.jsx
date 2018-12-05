import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import BackBtn from "../../components/BackBtn/BackBtn";

class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites() {
    Axios.get("/favorites").then(res => {
      this.setState({
        favorites: res.data
      });
    });
  }

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const favorites = this.state.favorites;
    console.log("FAVORITES: ", favorites);
    return (
      <div className="FavoritesList">
        <div>
          <h2 className="header">My Places</h2>
          {favorites.map((favorite, idx) => {
            return (
              <div key={idx} className="card horizontal">
                <div className="card-image">
                  <img src={favorite.photo} alt="place_img" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <h5>{favorite.name}</h5>
                    <p>
                      {favorite.city}, {favorite.state}
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/details">
                      <p
                        onClick={() =>
                          this.props.handleFavoriteVenue(favorite.venueId)
                        }
                      >
                        Go to Details
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FavoriteList;
