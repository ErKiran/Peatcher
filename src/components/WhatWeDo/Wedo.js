import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Dummy from './Features/Dummy';
import Popularcourse from './PopularCourse/Popularcourse';

class Wedo extends Component {
    render() {
        return (
            <div>
                <Header />
                <Dummy />
                <Popularcourse />
                <Footer />
            </div>
        );
    }
}

export default Wedo;