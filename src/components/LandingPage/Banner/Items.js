import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            <div className={this.props.item_type}>
                <div className="slider-thumb bg-fixed" style={{ backgroundImage: this.props.background_image }}></div>
                <div className="box-table shadow dark">
                    <div className="box-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="content">
                                        <h3 data-animation="animated slideInLeft">{this.props.left_text}</h3>
                                        <h1 data-animation="animated slideInUp">{this.props.up_text}</h1>
                                        <a data-animation="animated slideInUp" className="btn btn-light border btn-md"
                                            href="#">{this.props.button1}</a>
                                        <a data-animation="animated slideInUp" className="btn btn-theme effect btn-md"
                                            href="#">{this.props.button2}</a>
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

export default Items;