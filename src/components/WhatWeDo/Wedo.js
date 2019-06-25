import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Dummy from './Features/Dummy';

class Wedo extends Component {
    render() {
        return (
            <div>
                <Header />
                <Dummy />
                <Footer />

            </div>
        );
    }
}

export default Wedo;