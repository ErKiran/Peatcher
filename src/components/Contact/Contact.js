import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import ContactInfo from './ContactInfo';
import MapAndContact from './MapAndContact';
import Seperator from './Seperator';

class Contact extends Component {
    render() {
        return (
            <div>
                <Breadcrumb h1="Contact Us" li1="Home" li2="About us" li3="Get in Touch With us" background="url(assets/img/banner/8.jpg)" />
                <div className="contact-info-area default-padding">
                    <div className="container">
                        <div className="row">
                            <ContactInfo />
                            <Seperator />
                            <MapAndContact />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;