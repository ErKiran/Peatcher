import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Dummy from './Features/Dummy';
import Pcourse from './PopularCourse/Pcourse';

class Wedo extends Component {
    render() {
        return (
            <div>
                <Header />
                <Dummy />
                <Pcourse />
                <Footer />
            </div>
        );
    }
}

export default Wedo;