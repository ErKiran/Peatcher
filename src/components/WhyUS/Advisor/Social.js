import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <ul>
                    <li className="facebook">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="twitter">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="pinterest">
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </li>
                    <li className="linkedin">
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Social;