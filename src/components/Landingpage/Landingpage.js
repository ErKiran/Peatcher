import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Banner from './Banner/Banner';
import About from './About';

class Landingpage extends Component {
    render() {
        return (
            <div>
                <header id="home">
                    <Header />
                    <Banner />
                    <About />
                </header>
            </div>
        );
    }
}

export default Landingpage;