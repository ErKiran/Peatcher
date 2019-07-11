import React, { Component } from 'react';

const fullstar = (i) => (
    <i className="fas fa-star" key={i}></i>
);

const halfstar = (i) => (
    <i className="fas fa-star-half-alt" key={i}></i>
)

class Rating extends Component {
    render() {
        const full = parseInt(this.props.rating);
        const half = (this.props.rating - Math.floor(this.props.rating)).toFixed(1);
        let full_stars = [];
        let half_stars = [];
        for (let i = 0; i < full; i++) {
            full_stars.push(fullstar(i))
        }
        if (half <= 0.5) {
            half_stars.push(halfstar(half))
        }
        else {
            full_stars.push(fullstar())
        }
        return (
            <div className="rating">
                {full_stars}
                {half_stars}
                <span>{this.props.rating} {' '}({this.props.vote})</span>
            </div>
        );

    }
}
export default Rating;