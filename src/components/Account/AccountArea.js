import React, { Component } from 'react';

class AccountArea extends Component {
    render() {
        return (
            <div className="account-area ptb-70 bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h3 className="sidebar-title" style={{ textAlign: 'center' }}>Register Your Account</h3>
                            <div className="checkout-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <span>Email Address <span className="star">*</span></span>
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-xs-6">
                                            <span>Email Address <span className="star">*</span></span>
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-xs-6">
                                            <span>Email Address <span className="star">*</span></span>
                                            <input type="email" placeholder="Your email address here..." />
                                        </div>
                                        <div className="col-xs-6">
                                            <span>Username <span className="star">*</span></span>
                                            <input type="password" placeholder="Your password here..." />
                                        </div>
                                        <div className="col-xs-6">
                                            <span>Password <span className="star">*</span></span>
                                            <input type="password" placeholder="Your password here..." />
                                        </div>
                                        <div className="col-xs-6">
                                            <span>Repeat Password <span className="star">*</span></span>
                                            <input type="password" placeholder="Your password here..." />
                                        </div>
                                        <div className=" col-md-2 col-xs-4">
                                            <button>Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AccountArea;