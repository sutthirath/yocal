import React from "react";
import Axios from "axios";
import BackBtn from "../../components/BackBtn/BackBtn";

class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null
    };
  }

  componentDidMount() {
    const context = this;
    Axios.get("/favorites")
      .then(res => {
        console.log(res);
        // context.setState({
        //   favorites: res[0]
        // });
      })
      .then(console.log(this.state.favorites));
  }

  render() {
    return (
      <div>
        <BackBtn />
        <div className="FavoriteList">
          <h4>My Places</h4>
        </div>
      </div>
    );
  }
}

export default FavoriteList;
