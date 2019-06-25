import React, { Component } from 'react';
import Social from './Social';

class SingleItem extends Component {
    render() {
        return (
            <div className="advisor-item">
                <div className="info-box">
                    <img src={this.props.image} alt="Thumb" />
                    <div className="info-title">
                        <h4>{this.props.name}</h4>
                        <span>{this.props.rolein}</span>
                        <Social />
                    </div>
                </div>
            </div>

        );
    }
}

export default SingleItem;