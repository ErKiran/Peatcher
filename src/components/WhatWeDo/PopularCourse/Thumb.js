import React, { Component } from 'react';

class Thumb extends Component {
    render() {
        return (
            <div className="thumb">
                <a href="#">
                    <img src={this.props.image} alt="Thumb" />
                </a>
                <div className="price">Price: {this.props.price}</div>
            </div>
        );
    }
}

export default Thumb;