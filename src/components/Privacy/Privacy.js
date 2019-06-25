import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Breadcrumbs from '../Layouts/Breadcrumb';
import CourseDetails from './CourseDetails';

class Privacy extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumbs />
                <CourseDetails />
                <Footer />

            </div>
        );
    }
}

export default Privacy;