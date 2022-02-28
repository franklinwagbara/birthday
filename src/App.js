import React, { Component } from "react";
import "./App.css";
import List from "./components/list";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <List />
      </div>
    );
  }
}

export default App;
