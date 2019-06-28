import React, { Component } from 'react';
import HeadingC from './HeadingC';
import PopularCourseItem from './PopularCourseItem';

class Popularcourse extends Component {
    render() {
        return (
            <div className="popular-courses default-padding without-carousel">
                <div className="container">
                    <HeadingC />
                    <PopularCourseItem />
                </div>
            </div>
        );
    }
}

export default Popularcourse;