import React, { Component } from 'react';

class Accoutarea extends Component {
    render() {
        return (
            <div className="account-area ptb-70 bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h3 className="sidebar-title" style={{ textAlign: 'center' }}>Login To Your Account</h3>
                            <div className="checkout-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <span>Username</span>
                                            <input type="text" placeholder="Your username here..." />
                                        </div>
                                        <div className="col-xs-12">
                                            <span>Password</span>
                                            <input type="password" placeholder="Your password here..." />
                                        </div>
                                        <div className="col-xs-12">
                                            <input type="checkbox" />
                                            <span className="remamber">Remember me</span>
                                        </div>
                                        <div className="col-xs-12">
                                            <p>Forgot  your password ? <a href="#">Click here</a></p>
                                        </div>
                                        <div className="col-xs-4 col-md-2">
                                            <button>Sign In</button>
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

export default Accoutarea;