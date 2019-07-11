import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import Main from './Main';
import VideoArea from './VideoArea';


class About extends Component {
    render() {
        return (
            <div>
                <Breadcrumb h1="About Us" li1="Home" li2="About us" li3="Who are we" background="url(assets/img/banner/21.jpg)" />
                <Main />
                <VideoArea />
            </div>
        );
    }
}

export default About;