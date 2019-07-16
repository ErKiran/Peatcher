import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/authAction';
import RegisterSocial from '../Layouts/RegisterSocial';
import TextFieldGroup from '../Common/TextFieldGroup';


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
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.username,
            password2: this.state.password2
        };
        this.props.registerUser(userData, this.props.history);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <form onSubmit={this.onSubmit} id="register-form" className="white-popup-block">
                                <RegisterSocial />
                                <div className="col-md-8 login-custom">
                                    <h4>Register a new account</h4>
                                    <TextFieldGroup
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextFieldGroup
                                        placeholder="Username*"
                                        name="username"
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextFieldGroup
                                        placeholder="Password*"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                    />
                                    <TextFieldGroup
                                        placeholder="Repeat Password*"
                                        name="password2"
                                        type="password"
                                        value={this.state.password2}
                                        onChange={this.onChange}
                                        error={errors.password2}
                                    />
                                    <button type="submit">
                                        Sign up
                                        </button>
                                    <p className="link-bottom">Are you a member? <Link to="/login">Login now</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Main));



