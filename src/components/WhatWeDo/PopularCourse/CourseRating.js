import React, { Component } from 'react';

class CourseRating extends Component {
    render() {
        return (
            <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>{this.props.rating}</span>
            </div>
        );
    }
}

export default CourseRating;