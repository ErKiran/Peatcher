import React, { Component } from 'react';
import Breadcrumbs from '../Layouts/Breadcrumb';
import CourseDetails from './CourseDetails';

class Privacy extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs
                    background="url(assets/img/banner/2.jpg)"
                    h1="Privacy Policy"
                    li1="Home"
                    li2="Security"
                    li3="Privacy Policy"
                />
                <CourseDetails />
            </div>
        );
    }
}

export default Privacy;