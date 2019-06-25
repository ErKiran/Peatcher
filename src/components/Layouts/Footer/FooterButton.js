import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterButton extends Component {
    render() {
        return (
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                <p>&copy; Copyright 2019. All Rights Reserved by <Link to="/">PEATCHER</Link></p>
                            </div>
                            <div className="col-md-6 text-right link">
                                <ul>
                                    <li>
                                        <a href="#">Terms of user</a>
                                    </li>
                                    <li>
                                        <a href="#">License</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FooterButton;