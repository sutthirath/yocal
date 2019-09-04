import React from "react";
// import { debounce } from "debounce";

const Search = props => {
  return (
    <div className="Search" style={styles.container}>
      <div className="SearchBox" style={styles.searchBox}>
        <i className="material-icons prefix" style={styles.i}>
          search
        </i>
        <input
          placeholder="Search"
          type="text"
          style={styles.input.focus}
          // onChange={e => debounce(() => props.handleSearch(e), 1000, true)()}
          onBlur={props.handleSearch}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10px",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "90vw"
  },
  i: {
    color: "#fcd411"
  },
  input: {
    focus: {
      borderBottom: "1px solid #fcd411 !important",
      boxShadow: "none !important"
    }
  }
};

export default Search;
