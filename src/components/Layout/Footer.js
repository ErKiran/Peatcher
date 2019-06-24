import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-bottom bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            Copyright © {new Date().getFullYear()}. <a href="#">Design By Hamza Gulzar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;