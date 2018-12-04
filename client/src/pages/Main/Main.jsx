import React from "react";
import "./Main.css";

const Main = props => (
  <div className="Main">
    <h5>See What's Nearby:</h5>
    {props.places.map((place, idx) => {
      const imgSrc = place.categories.length > 0 && place.categories[0].icon;
      return (
        <div key={idx} className="Place btn amber card">
          <span className="left">{place.name}</span>
          {imgSrc && (
            <img
              src={`${imgSrc.prefix}bg_32${imgSrc.suffix}`}
              alt="icon"
              className="right"
            />
          )}
        </div>
      );
    })}
  </div>
);

export default Main;
