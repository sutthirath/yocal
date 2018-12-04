import React from "react";
import "./Search.css";

const Search = props => (
  <div className="Search">
    <div className="SearchBox">
      <i className="material-icons prefix">search</i>
      <input placeholder="Search" type="text" onChange={props.handleSearch} />
    </div>
  </div>
);

export default Search;
