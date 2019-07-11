import React, { Component } from 'react';

class FunItem extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className="fun-fact">
                    <div className="icon">
                        <i className={this.props.icon}></i>
                    </div>
                    <div className="info">
                        <span className="timer" data-to={this.props.to} data-speed={this.props.speed}></span>
                        <span className="medium">{this.props.title}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunItem;