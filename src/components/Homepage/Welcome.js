import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <section className="hero-area opacity-bg">
                    <div className="table">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="hero-wrap text-center">
                                            <h2>Welcome To The</h2>
                                            <h3>My Stuff Marketplace</h3>
                                            <p>Explore from thousands of premium quality products.</p>
                                            <ul>
                                                <li><a href="#">Explore Now</a></li>
                                                <li><a href="#">Become A Seller</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Welcome;