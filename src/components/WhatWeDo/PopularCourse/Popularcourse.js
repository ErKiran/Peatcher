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
                    <div className="col-md-12 button text-center">
                        <a className="btn btn-dark effect circle btn-md" href="#">Browse All Courses</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Popularcourse;