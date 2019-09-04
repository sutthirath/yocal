import React from "react";
import io from "socket.io-client";
import axios from "axios";
import moment from "moment";

export class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: []
    };

    this.socket = io("localhost:8080");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);

      axios
        .post("/chat_history", {
          author: this.props.user.name,
          message: data.message,
          time: data.time
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.props.user.name,
        message: this.state.message,
        time: new Date()
      });
      this.setState({ message: "" });
    };
  }

  componentDidMount() {
    let chatHistory = [];
    axios.get("/chat_history").then(res => {
      res.data.map(msg => {
        chatHistory.push(msg);
        return chatHistory;
      });
      this.setState({ messages: chatHistory });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="chat card">
              <div className="card-body">
                <div className="card-title">Yocal Chat</div>
                <hr />
                <div className="messages">
                  {this.state.messages.map(({ message, author, time }, i) => {
                    return (
                      <div key={i}>
                        <span className="left">
                          {author}:{message}
                        </span>
                        <br />
                        <span className="right">{moment(time).calendar()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card-footer bottom">
                <p
                  value={this.props.user.name}
                  onChange={ev => this.setState({ username: ev.target.value })}
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  placeholder="Ask for advice here!"
                  className="form-control"
                  value={this.state.message}
                  onChange={ev => this.setState({ message: ev.target.value })}
                />
                <br />
                <button
                  onClick={this.sendMessage}
                  className="btn btn-primary form-control"
                  // method="POST"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  chat: {
    height: "90vh"
  }
};
