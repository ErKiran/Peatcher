import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo.jpg" className="logo" alt="Logo" />
                </Link>
            </div>
        );
    }
}

export default NavHeader;