import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import Main from './Main';
class How extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="How it Works" li1="Home" li2="Our Concept" li3="How it Works" />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default How;