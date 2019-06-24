import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import ContactInfo from './ContactInfo';
import MapAndContact from './MapAndContact';
import Seperator from './Seperator';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="Contact Us" li1="Home" li2="About us" li3="Get in Touch With us" />
                <div class="contact-info-area default-padding">
                    <div class="container">
                        <div class="row">
                            <ContactInfo />
                            <Seperator />
                            <MapAndContact />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;