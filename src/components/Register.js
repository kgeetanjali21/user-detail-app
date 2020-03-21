import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {
            name,
            phone,
            email,
            username,
            password
        } = this.state;

        const user = {
            name,
            phone,
            email,
            username,
            password,
        }
        
        axios.post(`http://localhost:3001/users`, { user }, { headers: { "content-type": "application/json" }});
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        // });
        axios.get(`http://localhost:3001/users`)
            .then(res => {
                console.log(res.data);
        })
    }

    render() {
        return (
            <div className="register-form">
                <h1>Register user</h1>
                <form onSubmit={this.handleSubmit} className="form-wrap">
                    <div className="input-box">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="contactNumber">Contact Number: </label>
                        <input type="text" id="contactNumber" name="phone" onChange={this.handleChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" onChange={this.handleChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password: </label>
                        <input type="text" id="password" name="password" onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}

export default Register;
