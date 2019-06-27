import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactMessage } from '../../actions/contact';


import Map from './Map';


class MapAndContact extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            phone: '',
            message: ''
        };
    }
    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
            message: this.state.message
        };

        this.props.contactMessage(userData);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="maps-form">
                <Map />
                <div className="col-md-6 form">
                    <div className="heading">
                        <h3>Contact Us</h3>
                        <p>
                            Occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding
                    </p>
                    </div>
                    <form onSubmit={this.onSubmit} className="contact-form">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email*"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        type="text"
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                    />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group comments">
                                    <textarea
                                        className="form-control"
                                        id="comments"
                                        name="message"
                                        placeholder="Tell Me About Courses *"
                                        value={this.state.message}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <button type="submit" name="submit" id="submit">
                                    Send Message <i className="fa fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12 alert-notification">
                            <div id="message" className="alert-msg"></div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({
    contact: state.contact,
    errors: state.errors
});

export default connect(mapStateToProps, { contactMessage })(MapAndContact);
