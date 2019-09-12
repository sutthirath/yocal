import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleInput = e => {
    console.log(e);
    this.setState({
      query: e.target.value
    });
  };

  render() {
    const searchQuery = this.state.query;
    return (
      <div className="Search" style={styles.container}>
        <div className="SearchBox" style={styles.searchBox}>
          <input
            placeholder="Search"
            type="text"
            style={styles.input.focus}
            onChange={e => this.handleInput(e)}
          />
        </div>
        <button
          className="amber"
          onClick={() => this.props.handleSearch(searchQuery)}
          style={styles.searchBtn}
        >
          <i className="material-icons prefix" style={styles.i}>
            search
          </i>
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "3em",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fcd411"
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10px",
    borderRadius: "10px 0 0 10px",
    backgroundColor: "white",
    width: "50%"
  },
  searchBtn: {
    height: "100%",
    border: "none",
    borderRadius: "0 10px 10px 0"
  },
  i: {
    color: "white"
  },
  input: {
    focus: {
      borderBottom: "1px solid #fcd411 !important",
      boxShadow: "none !important"
    }
  }
};

export default Search;
