import React from "react";
import "./ChatHistory.scss";
import Message from "./Message";

const ChatHistory = ({ chatHistory }) => {
  const messageData = chatHistory.filter((data) => data.type !== 2);
  const messages = messageData.map((msg) => <Message message={msg} />);

  return <div className="ChatHistory">{messages}</div>;
};

export default ChatHistory;
