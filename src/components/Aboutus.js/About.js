import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import Main from './Main';
import VideoArea from './VideoArea';


class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="About Us" li1="Home" li2="About us" li3="Who are we" />
                <Main />
                <VideoArea />
                <Footer />
            </div>
        );
    }
}

export default About;