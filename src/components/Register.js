import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
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
            <div className="register-form">
                <h1>Register user</h1>
                <form onSubmit={this.handleSubmit} className="form-wrap">
                    <div className="input-box">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="contactNumber">Contact Number: </label>
                        <input type="text" id="contactNumber" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" />
                    </div>
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
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}

export default Register;
