import React, { Component } from 'react';
import Thumb from './Thumb';
import Others from './Others';
import mock from './mock.json'

class PopularCourseItem extends Component {
    render() {
        return (

            <div className="row">
                {
                    mock.map(i =>
                        <div className="popular-courses-items" key={i.author_image}>
                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <Thumb image={i.course_image} price={i.price} />
                                    <Others
                                        author_image={i.author_image}
                                        author_name={i.author_name}
                                        course_title={i.course_title}
                                        course_desc={i.course_desc}
                                        user={i.user}
                                        rating={i.rating}
                                        vote={i.votes}
                                        clock={i.clock}
                                    />
                                </div>
                            </div>
                        </div>

                    )}
            </div>

        );
    }
}

export default PopularCourseItem;