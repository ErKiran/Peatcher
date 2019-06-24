import React, { Component } from 'react';

class MapAndContact extends Component {
    render() {
        return (
            <div className="maps-form">
                <div className="col-md-6 maps">
                    <h3>Our Location</h3>
                    <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>
                    </div>
                </div>
                <div className="col-md-6 form">
                    <div className="heading">
                        <h3>Contact Us</h3>
                        <p>
                            Occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding
                    </p>
                    </div>
                    <form action="http://validthemes.com/themeforest/examin/assets/mail/contact.php" method="POST" className="contact-form">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                    <span className="alert-error"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="form-group comments">
                                    <textarea className="form-control" id="comments" name="comments" placeholder="Tell Me About Courses *"></textarea>
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

export default MapAndContact;