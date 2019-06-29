import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Banner from './Banner/Banner';

class Landingpages extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Footer />
            </>
        );
    }
}

export default Landingpages;