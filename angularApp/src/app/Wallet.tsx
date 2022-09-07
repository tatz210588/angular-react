import * as React from "react";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Wallet = () => {
  const [text, setText] = useState("Hola");
  return (
    <div>
      {text} <ConnectButton />
      <br />
      <button onClick={() => setText("Button Clicked")}>Change the Text</button>
    </div>
  );
};

export default Wallet;
