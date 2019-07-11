import React, { Component } from 'react';
import ItemsCollection from './Item/ItemsCollection';
import Course from './Course/Course';
import FunFactor from './FunFactor';
import Advisor from './Advisor/Advisor';

class Whyus extends Component {
    render() {
        return (
            <div>
                <ItemsCollection />
                <Course />
                <FunFactor />
                <Advisor />
            </div >
        );
    }
}

export default Whyus;