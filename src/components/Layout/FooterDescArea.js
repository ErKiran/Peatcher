import React, { Component } from 'react';

class FooterDescArea extends Component {
    render() {
        return (
            <div className="footer-area bg-4 ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-5 col-xs-12">
                            <div className="footer-widget">
                                <h2 style={{ color: 'white' }}>My Stuff</h2>
                                <p>My Stuff Market is a platform for digital advertisment to make selling of their products around the world.</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <div className="footer-widget">
                                <h2 className="footer-title">Earn</h2>
                                <ul>
                                    <li><a href="#">Shop Benefits</a></li>
                                    <li><a href="#">Become A Partner</a></li>
                                    <li><a href="#">Start Selling</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Free Goods</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-12">
                            <div className="footer-widget">
                                <h2 className="footer-title">Our Community</h2>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Discussions</a></li>
                                    <li><a href="#">Collections</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Start Selling</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <div className="footer-widget">
                                <h2 className="footer-title">Useful Links</h2>
                                <ul>
                                    <li><a href="#">Free Goods</a></li>
                                    <li><a href="#">Credits</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Branding eBook</a></li>
                                    <li><a href="#">Discussions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="footer-widget">
                                <h2 className="footer-title">Contact Us</h2>
                                <ul>
                                    <li><i className="fa fa-location-arrow" />23 hosaetii st., Kutir, London</li>
                                    <li><i className="fa fa-phone" />123 456-7890</li>
                                    <li><i className="fa fa-envelope" />info@mystuff.com</li>
                                </ul>
                                <div className="socil-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterDescArea;