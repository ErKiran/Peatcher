import React, { Component } from 'react';

class Breadcumb extends Component {
    render() {
        return (
            <div className="breadcumb-area ptb-70 bg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="breadcumb-wrap">
                                <h2>About Us</h2>
                                <ul>
                                    <li><a href="index-2.html">Home</a></li>
                                    <li>/</li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcumb;