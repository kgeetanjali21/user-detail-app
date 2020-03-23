import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/login-form.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            dataLength: "",
            error: true,
            usrData: {},
            errormsg: {
                name: "",
                phone: "",
                email: "",
                password: "",
                username: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postData = this.postData.bind(this);
        this.validateData = this.validateData.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/users`).then(res => {
            this.setState({
                dataLength: res.data.length + 1,
                usrData: res.data
            });
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateData(event) {
        const {
            name,
            value
        } = event.target;
        
        const {
            usrData,
            errormsg,
        } = this.state;

        let testDataflag = false;

        if(name === 'name') {
            if(value) {
                if(!(/^([a-zA-Z ]){2,30}$/).test(value)) {
                    this.setState({
                        errormsg: {
                            ...errormsg,
                            name: "Enter alphabets"
                        }
                    });
                    return testDataflag = false; 
                }
            } else {
                this.setState({
                    errormsg: {
                        ...errormsg,
                        name: "Name is required"
                    }
                });
                return testDataflag = false;
            }

            this.setState({
                errormsg: {
                    ...errormsg,
                    name: ""
                }
            });
            return testDataflag = true;
        } else if (name === 'email') {
            if(value) {
                if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(value)) {
                    this.setState({
                        errormsg: {
                            ...errormsg,
                            email: "Enter valid email address"
                        }
                    });
                    return testDataflag = false;
                } else if (usrData.some(itemData => itemData.email === value)) {
                    this.setState({
                        errormsg: {
                            ...errormsg,
                            email: "This email address is exist"
                        }
                    });
                    return testDataflag = false
                 }
            } else {
                this.setState({
                    errormsg: {
                        ...errormsg,
                        email: "Email is required"
                    }
                });
                return testDataflag = false;
            }
            this.setState({
                errormsg: {
                    ...errormsg,
                    email: ""
                }
            });
            return testDataflag = true;
        } else if (name === 'phone') {
            if(value) {
                if(!(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/).test(value)) {
                    this.setState({
                        errormsg: {
                            ...errormsg,
                            phone: "Enter valid phone number"
                        }
                    });
                    return testDataflag = false;
                }
            } else {
                this.setState({
                    errormsg: {
                        ...errormsg,
                        phone: "Phone number is required"
                    }
                });
                return testDataflag = false;
            }
            this.setState({
                errormsg: {
                    ...errormsg,
                    phone: ""
                }
            });
            return testDataflag = true;
        } else if (name === 'username') {
            if(value) {
                if (usrData.some(itemData => itemData.username === value)) {
                    this.setState({
                        errormsg: {
                            ...errormsg,
                            username: "This username is exist"
                        }
                    });
                    return testDataflag = false
                 }
            } else {
                this.setState({
                    errormsg: {
                        ...errormsg,
                        username: "Username is required"
                    }
                });
                return testDataflag = false;
            }
            this.setState({
                errormsg: {
                    ...errormsg,
                    username: ""
                }
            });
            return testDataflag = true;
        } else if (name === 'password') {
            if(!value) {
                this.setState({
                    errormsg: {
                        ...errormsg,
                        password: "Password is required"
                    }
                });
                return testDataflag = false;
            }
            this.setState({
                errormsg: {
                    ...errormsg,
                    password: ""
                }
            });
            return testDataflag = true;
        }

        if(testDataflag) {
            this.setState({
                error: false
            });
        }
    }

    postData() {
        const {
            name,
            phone,
            email,
            username,
            password,
            dataLength,
            error,
        } = this.state;

        if(!error) {
            axios.post(`http://localhost:3001/users`, {
                name,
                phone,
                email,
                username,
                password,
                id: dataLength
            },{headers:{"Content-Type" : "application/json"}});
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/users`).then(res => {
            this.setState({
                dataLength: res.data.length + 1,
                usrData: res.data
            }, () => {
                this.postData();
            });
        });
    }

    render() {
        const {
            errormsg
        } = this.state;
        return (
            <div className="register-form">
                <h2 className="page-name">Register user</h2>
                <form onSubmit={this.handleSubmit} className="form-wrap">
                    <div className="input-box">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" onChange={this.handleChange} onBlur={this.validateData} />
                        {
                            errormsg.name ? 
                                <span className="errormsg">{errormsg.name}</span>
                            : null
                        }
                    </div>
                    <div className="input-box">
                        <label htmlFor="contactNumber">Contact Number: </label>
                        <input type="text" id="contactNumber" name="phone" onChange={this.handleChange} onBlur={this.validateData} />
                        {
                            errormsg.phone ? 
                                <span className="errormsg">{errormsg.phone}</span>
                            : null
                        }
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" onChange={this.handleChange} onBlur={this.validateData} />
                        {
                            errormsg.email ? 
                                <span className="errormsg">{errormsg.email}</span>
                            : null
                        }
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" onChange={this.handleChange} onBlur={this.validateData} />
                        {
                            errormsg.username ? 
                                <span className="errormsg">{errormsg.username}</span>
                            : null
                        }
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} onBlur={this.validateData} />
                        {
                            errormsg.password ? 
                                <span className="errormsg">{errormsg.password}</span>
                            : null
                        }
                    </div>
                    <input type="submit" className="submit-user" value="Submit" disabled={this.state.error} />
                </form>
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}

export default Register;
