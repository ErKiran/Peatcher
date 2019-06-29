import React, { Component } from 'react';

class TestimonialItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="col-md-5 thumb">
                    <img src={this.props.image} alt="Thumb" />
                </div>
                <div className="col-md-7 info">
                    <p>
                        {this.props.desc}
                    </p>
                    <h4>{this.props.name}</h4>
                </div>
            </div>

        );
    }
}

export default TestimonialItem;