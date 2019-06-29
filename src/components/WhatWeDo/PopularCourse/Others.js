import React, { Component } from 'react';
import Buttoninfo from './Buttoninfo';
import Thumb from './Thumb';
import Rating from './Rating';

class CourseRating extends Component {
    render() {
        return (
            <div className="info">
                <div className="author-info">
                    <Thumb />
                    <div className="others">
                        <a href="#">{this.props.author_name}</a>
                        <Rating rating="4.2" />
                    </div>
                </div>
                <h4><a href="#">{this.props.course_title}</a></h4>
                <p>
                    {this.props.course_desc}
                </p>
                <Buttoninfo user="" clock="" />
            </div>
        );
    }
}

export default CourseRating;