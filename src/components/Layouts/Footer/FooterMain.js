import React, { Component } from 'react';

class FooterMain extends Component {
    render() {
        return (
            <footer className="bg-dark default-padding-top text-light">
                <div className="container">
                    <div className="row">
                        <div className="f-items">
                            <div className="col-md-4 item">
                                <div className="f-item">
                                    <h3>PEATCHER</h3>
                                    <p className="text-italic" style={{ textAlign: 'justify' }}>
                                        Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                            </p>
                                    <div className="subscribe">
                                        <form action="#">
                                            <div className="input-group stylish-input-group">
                                                <input type="email" placeholder="Enter your e-mail here" className="form-control" name="email" />
                                                <button type="submit">
                                                    <i className="fa fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 item">
                                <div className="f-item link">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Courses</a>
                                        </li>
                                        <li>
                                            <a href="#">Event</a>
                                        </li>
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>

                                        <li>
                                            <a href="#">Teachers</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 item">
                                <div className="f-item link">
                                    <h4>Support</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Donation</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Advertising</a>
                                        </li>

                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Feedback</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 item">
                                <div className="f-item address">
                                    <h4>Address</h4>
                                    <ul>
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <p>Email <span><a href="mailto:support@peatcher.com">support@peatcher.com</a></span></p>
                                        </li>
                                        <li>
                                            <i className="fas fa-map"></i>
                                            <p>Office <span>123 6th St. Spain.</span></p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterMain;