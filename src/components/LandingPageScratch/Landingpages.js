import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Banner from './Banner/Banner';
import About from './About';
import Options from './Options';
import TopCategories from './TopCategories/TopCategories';

class Landingpages extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <About />
                <Options />
                <TopCategories />
                <Footer />
            </>
        );
    }
}

export default Landingpages;