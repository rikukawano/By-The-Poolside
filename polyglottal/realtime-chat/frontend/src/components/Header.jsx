import React from "react";
import "./Header.scss";

const Header = ({ chatHistory }) => {
  console.log("Header component -->", chatHistory);
  const poolSize = chatHistory.find((data) => data.type === 2);
  let poolSizeRender = <h3>Connected: 0</h3>;
  if (poolSize) {
    poolSizeRender = <h3>Connected: {poolSize.body}</h3>;
  }

  return (
    <div className="header">
      <h1>🍸 BY THE POOLSIDE</h1>
      {poolSizeRender}
    </div>
  );
};

export default Header;
