import React, { Component } from 'react';

class Thumb extends Component {
    render() {
        if (this.props.price) {
            return (
                <div className="thumb">
                    <a href="#">
                        <img src={this.props.image} alt="Thumb" />
                    </a>
                    <div className="price">Price: {this.props.price}</div>
                </div>
            );
        }
        else {
            return (
                <div className="thumb">
                    <a href="#"><img src="assets/img/team/1.jpg" alt="Thumb" /></a>
                </div>
            )
        }
    }
}

export default Thumb;