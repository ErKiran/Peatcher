import React, { Component } from 'react';
import Buttoninfo from './Buttoninfo';
import Thumb from './Thumb';
import Rating from './Rating';

class CourseRating extends Component {
    render() {
        return (
            <div className="info">
                <div className="author-info">
                    <Thumb image={this.props.author_image} />
                    <div className="others">
                        <a href="#">{this.props.author_name}</a>
                        <Rating rating={this.props.rating} vote={this.props.vote} />
                    </div>
                </div>
                <h4><a href="#">{this.props.course_title}</a></h4>
                <p>
                    {this.props.course_desc}
                </p>
                <Buttoninfo user={this.props.user} clock={this.props.clock} />
            </div>
        );
    }
}

export default CourseRating;