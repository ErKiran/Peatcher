import React, { Component } from 'react';

class FunItem extends Component {
    render() {
        return (
            <div class="col-md-3 col-sm-6 item">
                <div class="fun-fact">
                    <div class="icon">
                        <i class={this.props.icon}></i>
                    </div>
                    <div class="info">
                        <span class="timer" data-to={this.props.to} data-speed={this.props.speed}></span>
                        <span class="medium">{this.props.title}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunItem;