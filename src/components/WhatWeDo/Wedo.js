import React, { Component } from 'react';
import Features from './Features/Features';
import Popularcourse from './PopularCourse/Popularcourse';

class Wedo extends Component {
    render() {
        return (
            <div>
                <Features />
                <Popularcourse />
            </div>
        );
    }
}

export default Wedo;