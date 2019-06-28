import React, { Component } from 'react';
import Thumb from './Thumb';
import Others from './Others';

class PopularCourseItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="popular-courses-items">
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <Thumb />
                            <Others />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularCourseItem;