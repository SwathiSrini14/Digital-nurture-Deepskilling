import React, { Component } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class LoginControl extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoggedIn: false

        };

    }

    login = () => {

        this.setState({

            isLoggedIn: true

        });

    }

    logout = () => {

        this.setState({

            isLoggedIn: false

        });

    }

    render() {

        let button;
        let page;

        if (this.state.isLoggedIn) {

            button = <button onClick={this.logout}>Logout</button>;

            page = <UserPage />;

        }

        else {

            button = <button onClick={this.login}>Login</button>;

            page = <GuestPage />;

        }

        return (

            <div>

                {button}

                <br /><br />

                {page}

            </div>

        );

    }

}

export default LoginControl;