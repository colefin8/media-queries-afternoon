import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Services from "./Components/Services";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  handleResize = () => {
    console.log(this.state.width);
    console.log(window.innerWidth);
    if (Math.abs(this.state.width - window.innerWidth) > 100) {
      this.setState({ width: window.innerWidth });
    }
  };

  render() {
    window.addEventListener("resize", this.handleResize);
    return (
      <div className="App">
        <Header />
        <Welcome />
        <Services />
      </div>
    );
  }
}

export default App;
