import React, { Component } from 'react';

class Options extends Component {
    render() {
        return (
            <div className="top-cat-area inc-trending-courses about-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 top-cat-items text-light inc-bg-color text-center">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 equal-height">
                                    <div className="item malachite" style={{ backgroundImage: 'url(assets/img/category/3.jpg)' }}>
                                        <a href="#">
                                            <i className="flaticon-teacher-lecture-in-front-an-auditory" />
                                            <div className="info">
                                                <h4>Be A Teacher!</h4>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus</p>
                                                <span data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 equal-height">
                                    <div className="item mariner" style={{ backgroundImage: 'url(assets/img/category/1.jpg)' }}>
                                        <a href="#">
                                            <i className="flaticon-learning" />
                                            <div className="info">
                                                <h4>Be A Student</h4>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus</p>
                                                <span data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Options;