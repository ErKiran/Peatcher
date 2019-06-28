import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: this.props.background }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{this.props.h1}</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> {this.props.li1}</a></li>
                                <li><a href="#">{this.props.li2}</a></li>
                                <li className="active">{this.props.li3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;