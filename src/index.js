import React from "react";
import ReactDOM from "react-dom";

import Slots from "./components/Slots";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Slot Machines!</h1>
      <Slots s1="🍊" s2="🍒" s3="🍊" />
      <Slots s1="🍒" s2="🍒" s3="🍒" />
      <Slots s1="🍒" s2="🍒" s3="🍊" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
