import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = this.props.message;
    console.log("message component -->", this.props.message);
    this.state = {
      message: temp,
    };
  }

  render() {
    return <div className="Message">{this.state.message.body}</div>;
  }
}

export default Message;
