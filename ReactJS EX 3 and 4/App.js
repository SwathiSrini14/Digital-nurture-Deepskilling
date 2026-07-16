import React, { Component } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div className="container">

        <h1>React Event Handling</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increase}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;