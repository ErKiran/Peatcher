import React, { Component } from 'react';

class ContactArea extends Component {
    render() {
        return (
            <div className="contact-area ptb-70 bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-wrap">
                                <h2 className="contact-title">Get In Touch With Us</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="select">
                                            <option value="Subject">Subject</option>
                                            <option>Web Design</option>
                                            <option>Web Developer</option>
                                            <option>UX/UI Design</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-12">
                                        <textarea name="massage" id="massage" cols={30} rows={10} placeholder="Your Message Here..." defaultValue={""} />
                                    </div>
                                    <div className="col-xs-12">
                                        <button className="btn-style">Send A Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-wrap">
                                <h2 className="contact-title">Contact Us</h2>
                                <p>Consectetur aliquet a erat per sem nisi leo placerat dui a adipiscing a sagittis vestia bulum. Sagittis posuere id nam quis vestibulum faucibus a est tristique atia ridicu lus quis sed. Sagittis posuere id nam quis vestibulum faucibus a est tristique atia ridiculus quis sed.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span><i className="fa fa-location-arrow" />23 hosaetii st., Kutir, London</span>
                                    </div>
                                    <div className="col-md-6">
                                        <span><i className="fa fa-phone" />123 456-7890</span>
                                    </div>
                                    <div className="col-md-6">
                                        <span><i className="fa fa-envelope" />erfan@kutirghor.com</span>
                                    </div>
                                    <div className="col-md-6">
                                        <span><i className="fa fa-clock-o" />Support forum for over 24h</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flow-us flow-wrap">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContactArea;