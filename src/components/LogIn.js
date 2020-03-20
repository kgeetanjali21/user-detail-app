import React, { Component } from 'react';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <h1>User Login</h1>
                <form onSubmit={this.handleSubmit} className="user-form">
                    <div className="input-box">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password: </label>
                        <input type="text" id="password" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default LogIn;