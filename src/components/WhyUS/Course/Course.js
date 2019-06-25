import React, { Component } from 'react';
import CourseItem from './CourseItem';

class Course extends Component {
    render() {
        return (
            <div id="featured-courses" className="featured-courses-area left-details default-padding">
                <div className="container">
                    <div className="row">
                        <div className="featured-courses-carousel owl-carousel owl-theme">
                            <CourseItem />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;