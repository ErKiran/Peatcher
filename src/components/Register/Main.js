import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/authAction';
<<<<<<< HEAD
import RegisterSocial from '../Layouts/RegisterSocial';
=======
import RegisterSocial from './RegisterSocial';
>>>>>>> 3fceaf55aa0d13a822c447b73d674b603758dd31


class Main extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            username: '',
            errors: {}
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.username
        };
<<<<<<< HEAD
        const values = this.props.registerUser(userData);
        //console.log(values.hasOwnProperty('_id'))
        if (values.hasOwnProperty('_id')) {
            this.props.history.push('/login')
        }
=======

        this.props.registerUser(userData);
        console.log(userData)
>>>>>>> 3fceaf55aa0d13a822c447b73d674b603758dd31
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <form onSubmit={this.onSubmit} id="register-form" className="white-popup-block">
                                <RegisterSocial />
                                <div className="col-md-8 login-custom">
                                    <h4>Register a new account</h4>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Email*"
                                                    type="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Username*"
                                                    type="text"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Password*"
                                                    type="text"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Repeat Password*"
                                                    type="text"
                                                    name="password2"
                                                    value={this.state.password2}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <button type="submit">
                                                Sign up
                                        </button>
                                        </div>
                                    </div>
                                    <p className="link-bottom">Are you a member? <Link to="/login">Login now</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Main));



