import React, { Component } from 'react';

class Buttoninfo extends Component {
    render() {
        return (
            <div className="bottom-info">
                <ul>
                    <li>
                        <i className="fas fa-user"></i> 300
                                        </li>
                    <li>
                        <i className="fas fa-clock"></i> 16:00
                                        </li>
                </ul>
                <a href="#">Enroll Now</a>
            </div>
        );
    }
}

export default Buttoninfo;