//Coded by josh from Joshs' Corner

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React.JS</h1>
      <h2>Hello! This is my first react application.</h2>

      <p>Here is another paragraph!</p>
      <p>Oh look, it's another one!</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
