import React, { Component } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FooterDescArea from '../Layout/FooterDescArea';
import NewsLetterArea from '../Layout/NewsLetterArea';
import Breadcumb from './Breadcumb';
import ServiceArea from './ServiceArea';
import Mission from './Mission';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcumb />
                <ServiceArea />
                <Mission />
                <NewsLetterArea />
                <FooterDescArea />
                <Footer />
            </div>
        );
    }
}

export default About;