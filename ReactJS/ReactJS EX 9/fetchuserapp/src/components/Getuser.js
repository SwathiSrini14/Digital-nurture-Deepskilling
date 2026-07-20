import React, { Component } from "react";

class Getuser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: null
        };
    }

    componentDidMount() {

        fetch("https://api.randomuser.me/")
            .then(response => response.json())
            .then(data => {

                this.setState({
                    person: data.results[0]
                });

            })
            .catch(error => console.log(error));

    }

    render() {

        const { person } = this.state;

        if (!person) {
            return <h2>Loading...</h2>;
        }

        return (

            <div className="card">

                <h2>User Details</h2>

                <img
                    src={person.picture.large}
                    alt="User"
                />

                <h3>
                    {person.name.title} {person.name.first}
                </h3>

            </div>

        );

    }

}

export default Getuser;