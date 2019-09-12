import React from "react";
import { Link } from "react-router-dom";

import Distance from "../components/Distance";

const Main = props => (
  <div className="Main" style={styles.container}>
    <h5>{props.title}</h5>
    {props.places.map((place, idx) => {
      const imgSrc = place.categories.length > 0 && place.categories[0].icon;
      let catName = place.categories.length > 0 && place.categories[0].name;
      return (
        <Link to="/details" key={idx}>
          <div
            className="amber card row"
            style={styles.place}
            onClick={() => props.handleVenue(place.id)}
          >
            <div style={styles.title}>
              <h6 style={styles.text}>{`${idx + 1}. ${place.name}`}</h6>
            </div>
            <div style={styles.category}>
              <p>{catName}</p>
            </div>
            <Distance
              style={styles.distance}
              lat1={props.lat1}
              lon1={props.lon1}
              lat2={place.location.lat}
              lon2={place.location.lng}
            />
            <div style={styles.image}>
              {imgSrc && (
                <img src={`${imgSrc.prefix}bg_32${imgSrc.suffix}`} alt="icon" />
              )}
            </div>
          </div>
        </Link>
      );
    })}
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fcd411",
    height: "100%",
    width: "100%"
  },
  place: {
    display: "grid",
    color: "white",
    width: "30em",
    height: "5em",
    gridTemplateColumns: "2fr 2fr 1fr",
    gridTemplateRows: "2fr 1fr",
    gridTemplateAreas: `
    "title    title    title"
    "category distance image"
    `
  },
  title: {
    gridArea: "title",
    textAlign: "start",
    whiteSpace: "nowrap",
    padding: "0 1em"
  },
  text: {
    margin: "0",
    padding: "0"
  },
  category: {
    gridArea: "category",
    paddingLeft: "1em"
  },
  distance: {
    gridArea: "distance"
  },
  image: {
    gridArea: "image",
    paddingRight: "1em"
  }
};

export default Main;
