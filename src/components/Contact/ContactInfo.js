import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="col-md-4 col-sm-4">
                    <div className="item">
                        <div className="icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="info">
                            <h4>Call Us</h4>
                            <span>+92 314 59 11 317</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                            <h4>Address</h4>
                            <span>Spain</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="item">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info">
                            <h4>Email Us</h4>
                            <span>info@peatcher.com</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;