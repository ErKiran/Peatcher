import React, { Component } from 'react';
import Header from '../Layout/Header';
import Welcome from './Welcome';
import SearchArea from './SearchArea';
//import FeatureProductIntro from './FeatureProductIntro';
import FeatureProduct from './FeatureProduct';
import SailingArea from './SailingArea';
import NewsLetterArea from '../Layout/NewsLetterArea';
import FooterDescArea from '../Layout/FooterDescArea';
import Footer from '../Layout/Footer';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Welcome />
                <SearchArea />
                <FeatureProduct />
                <SailingArea />
                <NewsLetterArea />
                <FooterDescArea />
                <Footer />
            </div>
        );
    }
}

export default Homepage;