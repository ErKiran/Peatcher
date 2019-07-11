import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import Main from './Main';
class How extends Component {
    render() {
        return (
            <div>
                <Breadcrumb h1="How it Works" li1="Home" li2="Our Concept" li3="How it Works" />
                <Main />
            </div>
        );
    }
}

export default How;