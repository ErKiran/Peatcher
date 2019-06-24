import React, { Component } from 'react';

class Slides extends Component {
    render() {
        return (
            <div className="carousel-inner text-light carousel-zoom">
                <div className="item active">
                    <div className="slider-thumb bg-fixed" style={{ backgroundImage: 'url(assets/img/banner/1.jpg)' }}></div>
                    <div className="box-table shadow dark">
                        <div className="box-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="content">
                                            <h3 data-animation="animated slideInLeft">Reach you career</h3>
                                            <h1 data-animation="animated slideInUp">Learn from best online training Platform</h1>
                                            <a data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</a>
                                            <a data-animation="animated slideInUp" className="btn btn-theme effect btn-md" href="#">View Courses</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-thumb bg-fixed" style={{ backgroundImage: 'url(assets/img/banner/2.jpg)' }}></div>
                    <div className="box-table shadow dark">
                        <div className="box-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="content">
                                            <h3 data-animation="animated slideInLeft">We're glade to see you</h3>
                                            <h1 data-animation="animated slideInUp">explore our brilliant Teachers</h1>
                                            <a data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">Get Started</a>
                                            <a data-animation="animated slideInUp" className="btn btn-theme effect btn-md" href="#">View Teachers</a>
                                        </div>
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

export default Slides;