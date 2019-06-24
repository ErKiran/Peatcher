import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Banner from './Banner/Banner';
import About from './About';
import Options from './Options';
import TopCategories from './TopCategories';
import FunFactor from './FunFactor';
import Testonomial from './Testomonial';
import Blog from './Blog';
import Footer from '../Layouts/Footer/Footer'

class Landingpage extends Component {
    render() {
        return (
            <div>
                    <Header />
                    <Banner />
                    <About />
                    <Options />
                    <TopCategories />
                    <FunFactor />
                    <Testonomial />
                    <Blog />
                    <Footer />
            </div>
        );
    }
}

export default Landingpage;