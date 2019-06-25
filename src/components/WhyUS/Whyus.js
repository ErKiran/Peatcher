import React, { Component } from 'react';
import ItemsCollection from './Item/ItemsCollection';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Course from './Course/Course';
import FunFactor from './FunFactor';
import Advisor from './Advisor/Advisor';

class Whyus extends Component {
    render() {
        return (
            <div>
                <Header />
                <ItemsCollection />
                <Course />
                <FunFactor />
                <Advisor />
                <Footer />
            </div >
        );
    }
}

export default Whyus;