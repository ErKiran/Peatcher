import React, { Component } from 'react';

class NavHeader extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo.jpg" className="logo" alt="Logo" />
                </a>
            </div>
        );
    }
}

export default NavHeader;