import React, { Component } from 'react';
import Buttoninfo from './Buttoninfo';
import Thumb from './Thumb';

class CourseRating extends Component {
    render() {
        return (
            <div className="info">
                <div className="author-info">
                    <Thumb />
                    <div className="others">
                        <a href="#">Munil Druva</a>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>{this.props.rating}</span>
                        </div>
                    </div>
                </div>
                <h4><a href="#">data science and software</a></h4>
                <p>
                    Would day nor ask walls known. But preserved advantage are but and certainty
                    earnestly enjoyment.
             </p>
                <Buttoninfo />
            </div>
        );
    }
}

export default CourseRating;