import React, { Component } from 'react';

class DoubleCheck extends Component {
    render() {
        return (
            <li>
                <i className="fas fa-check-double">
                </i>
                {this.props.text}
            </li>
        );
    }
}

export default DoubleCheck;