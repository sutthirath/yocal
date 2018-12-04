import React from "react";
// import { debounce } from "debounce";
import "./Search.css";

const Search = props => {
  return (
    <div className="Search">
      <div className="SearchBox">
        <i className="material-icons prefix">search</i>
        <input
          placeholder="Search"
          type="text"
          // onChange={e => debounce(() => props.handleSearch(e), 1000, true)()}
          onBlur={props.handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
