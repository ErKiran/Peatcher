import React, { Component } from 'react';

class RegisterSocial extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4 login-social">
                    <h4>Register with social</h4>
                    <ul>
                        <li className="facebook">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="linkedin">
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RegisterSocial;