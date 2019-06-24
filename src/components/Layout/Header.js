import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-8">
                                <div className="logo">
                                    <a href="/"><img src="img/logo.png" alt="Logo" /></a>
                                </div>
                            </div>
                            <div className="col-md-9 hidden-sm hidden-xs">
                                <div className="mainmenu text-right">
                                    <nav>
                                        <ul id="navigation" style={{ fontStyle: 'italic' }}>
                                            <li className="active"><Link to="/" >Home </Link>
                                            </li>
                                            <li><Link to="/About">About Us</Link></li>
                                            <li><Link to="/Contact">Contact Us</Link></li>
                                            <li><Link to="/Account">Sign Up</Link></li>
                                            <li> <Link to="/login" >Log In </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xs-4 hidden-lg hidden-md">
                                <div className="responsive-menu-wrap floatright" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;