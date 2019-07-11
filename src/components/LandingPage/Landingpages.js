import React, { Component } from 'react';
import Banner from './Banner/Banner';
import About from './About';
import Options from './Option/Options';
import TopCategories from './TopCategories/TopCategories';
import FunFact from './FunFact/FunFact';
import Testimonials from './Testimonials/Testimonials';
import Blog from './Blog/Blog';

class Landingpages extends Component {
    render() {
        return (
            <div>
                <Banner />
                <About />
                <Options />
                <TopCategories />
                <FunFact />
                <Testimonials />
                <Blog />
            </div>
        );
    }
}

export default Landingpages;