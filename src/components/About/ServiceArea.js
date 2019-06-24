import React, { Component } from 'react';

class ServiceArea extends Component {
    render() {
        return (
            <div className="quick-service-area ptb-70 quick-service-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="quick-service-wrap clear">
                                <div className="quick-service-icon">
                                    <i className="fa fa-truck" />
                                </div>
                                <div className="quick-service-info">
                                    <h2>Free Shipping</h2>
                                    <p>There are many variations of passag ages of Lorem Ipsum available, but the majority passag ages have suffered majority passag.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="quick-service-wrap clear">
                                <div className="quick-service-icon">
                                    <i className="fa fa-briefcase" />
                                </div>
                                <div className="quick-service-info">
                                    <h2>Secured Transactions</h2>
                                    <p>There are many variations of passag ages of Lorem Ipsum available, but the majority passag ages have suffered majority passag.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="quick-service-wrap clear">
                                <div className="quick-service-icon">
                                    <i className="fa fa-life-ring" />
                                </div>
                                <div className="quick-service-info">
                                    <h2>Quick Support</h2>
                                    <p>There are many variations of passag ages of Lorem Ipsum available, but the majority passag ages have suffered majority passag.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ServiceArea;