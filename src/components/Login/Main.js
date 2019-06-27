import React, { Component } from 'react';
import RegisterSocial from '../Layouts/RegisterSocial';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authAction';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/What_we_do');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/What_we_do');
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/What_we_do')
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log(this.props)
        return (
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <form onSubmit={this.onSubmit} id="login-form" className="white-popup-block">
                                <RegisterSocial />
                                <div className="col-md-8 login-custom">
                                    <h4>login to your registered account!</h4>
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
                                                    placeholder="Password*"
                                                    type="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <label htmlFor="login-remember"><input type="checkbox" id="login-remember" />Remember Me </label>
                                            <Link title="Lost Password" to="/forget_password" className="lost-pass-link">Lost your password?</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <button type="submit">
                                                Login
                                    </button>
                                        </div>
                                    </div>
                                    <p className="link-bottom">Not a member yet? <Link to="/signup">Register now</Link></p>
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

export default connect(mapStateToProps, { loginUser })(Main);
