import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message!");
      const newMsg = JSON.parse(msg.data);
      this.setState((prevState) => ({
        chatHistory: [...this.state.chatHistory, newMsg],
      }));
      console.log("chatHistory State -->", this.state.chatHistory);
    });
  }

  render() {
    return (
      <div className="App">
        <Header chatHistory={this.state.chatHistory} />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
