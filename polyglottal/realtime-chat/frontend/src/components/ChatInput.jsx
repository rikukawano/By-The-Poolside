import React from "react";
import "./ChatInput.scss";

const ChatInput = ({ send }) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={send} placeholder="Enter message" />
    </div>
  );
};

export default ChatInput;
