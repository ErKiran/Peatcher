import React, { Component } from 'react';

class Dummy extends Component {
    render() {
        return (
            <div className="our-featues-area about-area default-padding bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="search-course">
                            <div className="col-md-12">
                                <div className="heading text-center text-light">
                                    <h2>Learn a new skill online on your time</h2>
                                    <h4>5,000 Online Courses</h4>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Enter course name" className="form-control" name="text" />
                                    <button type="submit">
                                        Search Courses
                                </button>
                                </form>
                            </div>
                        </div>
                        <div className="our-features">
                            <div className="col-md-4 col-sm-4">
                                <div className="item mariner">
                                    <div className="icon">
                                        <i className="flaticon-faculty-shield"></i>
                                    </div>
                                    <div className="info">
                                        <h4>Expert faculty</h4>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="item java">
                                    <div className="icon">
                                        <i className="flaticon-book-2"></i>
                                    </div>
                                    <div className="info">
                                        <h4>Online learning</h4>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="item malachite">
                                    <div className="icon">
                                        <i className="flaticon-education"></i>
                                    </div>
                                    <div className="info">
                                        <h4>Scholarship</h4>
                                        <a href="#">Read More</a>
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

export default Dummy;