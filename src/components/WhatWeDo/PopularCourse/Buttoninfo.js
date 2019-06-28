import React, { Component } from 'react';

class Buttoninfo extends Component {
    render() {
        return (
            <div className="bottom-info">
                <ul>
                    <li>
                        <i className="fas fa-user"></i> {this.props.user}
                    </li>
                    <li>
                        <i className="fas fa-clock"></i> {this.props.clock}
                    </li>
                </ul>
                <a href="#">Enroll Now</a>
            </div>
        );
    }
}

export default Buttoninfo;