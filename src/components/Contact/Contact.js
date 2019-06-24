import React, { Component } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FooterDescArea from '../Layout/FooterDescArea';
import NewsLetterArea from '../Layout/NewsLetterArea';
import Breadcumb from './Breadcumb';
import ServiceArea from './ServiceArea';
import ContactArea from './ContactArea';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcumb />
                <ServiceArea />
                <ContactArea />
                <NewsLetterArea />
                <FooterDescArea />
                <Footer />
            </div>
        );
    }
}

export default Contact;