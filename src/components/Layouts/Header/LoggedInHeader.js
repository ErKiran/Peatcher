import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../actions/authAction';
import NavInfo from './NavInfo';
import { connect } from 'react-redux';

class LoggedInHeader extends Component {
    render() {
        const logOut = (e) => {
            e.preventDefault();
            this.props.logoutUser();
        }
        return (
            <header id="home">
                <nav className="navbar navbar-default navbar-sticky bootsnav">
                    <div className="container">
                        <div className="attr-nav" style={{ borderLeft: '1px solid #e7e7e7' }}>
                            <ul>
                                <li className="side-menu"><a href="#"><i className="fa fa-bars"></i></a></li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src="assets/img/logo.jpg" className="logo" alt="Logo" />
                            </Link>
                        </div>
                        <NavInfo />
                    </div>
                    <div className="side" >
                        <a href="#" className="close-side">
                            <i className="fa fa-times"></i>
                        </a>
                        <div className="widget">
                            <h4 className="title">My Account</h4>
                            <ul>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Edit Profile</a></li>
                                <li><a href="/" onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});



export default connect(mapStateToProps, { logoutUser })(
    LoggedInHeader
);
