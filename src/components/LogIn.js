import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="user-login-form">
                <h1>User Login</h1>
                <form onSubmit={this.handleSubmit} className="form-wrap">
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
                <p>New User? <Link to='/register'>Register</Link></p>
            </div>
        )
    }
}

export default LogIn;