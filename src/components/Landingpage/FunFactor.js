import React, { Component } from 'react';

class FunFactor extends Component {
    render() {
        return (
            <div className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard" style={{ backgroundImage: 'url(assets/img/banner/2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 item">
                            <div className="fun-fact">
                                <div className="icon">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <div className="info">
                                    <span className="timer" data-to="212" data-speed="2000"></span>
                                    <span className="medium">Awards Achieve</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 item">
                            <div className="fun-fact">
                                <div className="icon">
                                    <i className="flaticon-professor"></i>
                                </div>
                                <div className="info">
                                    <span className="timer" data-to="1000" data-speed="2000"></span>
                                    <span className="medium">Satisfied Parents</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 item">
                            <div className="fun-fact">
                                <div className="icon">
                                    <i className="flaticon-online"></i>
                                </div>
                                <div className="info">
                                    <span className="timer" data-to="8970" data-speed="2000"></span>
                                    <span className="medium">Students Enrolled</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 item">
                            <div className="fun-fact">
                                <div className="icon">
                                    <i className="flaticon-reading"></i>
                                </div>
                                <div className="info">
                                    <span className="timer" data-to="640" data-speed="2000"></span>
                                    <span className="medium">Cources</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFactor;