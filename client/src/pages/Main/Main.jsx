import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Distance from "../../components/Distance/Distance";

const Main = props => (
  <div className="Main">
    <h5>{props.title}</h5>
    {props.places.map((place, idx) => {
      const imgSrc = place.categories.length > 0 && place.categories[0].icon;
      let catName = place.categories.length > 0 && place.categories[0].name;
      return (
        <Link to="/details" key={idx}>
          <div
            className="Place btn amber card"
            onClick={() => props.handleVenue(place.id)}
          >
            <span className="left">{`${idx + 1}. `}</span>
            <span className="left">{place.name}</span>
            <span className="left">{`Categories: ${catName}`}</span>
            <span className="left">
              <Distance
                lat1={props.lat1}
                lon1={props.lon1}
                lat2={place.location.lat}
                lon2={place.location.lng}
              />
            </span>
            <span className="left">
              {imgSrc && (
                <img src={`${imgSrc.prefix}bg_32${imgSrc.suffix}`} alt="icon" />
              )}
            </span>
          </div>
        </Link>
      );
    })}
  </div>
);

export default Main;
