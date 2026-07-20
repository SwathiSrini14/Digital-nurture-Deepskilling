import React, { Component } from "react";

class EventExamples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {

        this.setState({
            count: this.state.count + 1
        });

    }

    decrement() {

        this.setState({
            count: this.state.count - 1
        });

    }

    sayHello() {

        alert("Hello! Have a nice day.");

    }

    increase() {

        this.increment();
        this.sayHello();

    }

    sayWelcome(message) {

        alert(message);

    }

    onPress(event) {

        alert("I was clicked");

        console.log(event);

    }

    render() {

        return (

            <div className="box">

                <h2>Counter : {this.state.count}</h2>

                <button onClick={() => this.increase()}>
                    Increment
                </button>

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button
                    onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button
                    onClick={(event) => this.onPress(event)}>
                    OnPress
                </button>

            </div>

        );

    }

}

export default EventExamples;