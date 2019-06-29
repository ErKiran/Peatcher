import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Features from './Features/Features';
import Popularcourse from './PopularCourse/Popularcourse';

class Wedo extends Component {
    render() {
        return (
            <div>
                <Header />
                <Features />
                <Popularcourse />
                <Footer />
            </div>
        );
    }
}

export default Wedo;