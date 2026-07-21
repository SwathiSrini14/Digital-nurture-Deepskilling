import React, { Component } from "react";

class EventExamples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    sayHello = () => {
        alert("Hello! Welcome to React Events.");
    }

    increase = () => {
        this.increment();
        this.sayHello();
    }

    sayWelcome = (message) => {
        alert(message);
    }

    onPress = (event) => {
        alert("I was clicked");
        console.log(event);
    }

    render() {

        return (

            <div className="card">

                <h2>Counter : {this.state.counter}</h2>

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

            </div>

        );
    }
}

export default EventExamples;