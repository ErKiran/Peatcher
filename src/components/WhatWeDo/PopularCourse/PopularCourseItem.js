import React, { Component } from 'react';
import Thumb from './Thumb';
import Others from './Others';
import mock from './mock.json'

class PopularCourseItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="popular-courses-items">
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            {mock.map(i =>
                                <>
                                    <Thumb image={i.course_image} price={i.price} />
                                    <Others
                                        author_image={i.author_image}
                                        author_name={i.author_name}
                                        course_title={i.course_title}
                                        course_desc={i.course_desc}
                                        user={i.user}
                                        clock={i.clock}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularCourseItem;