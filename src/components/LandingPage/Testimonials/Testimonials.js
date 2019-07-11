import React, { Component } from 'react';
import TestimonialsTitle from './TestimonialsTitle';
import TestimonialItem from './TestimonialItem';
import mock from './mock.json'

class Testimonials extends Component {
    render() {
        return (
            <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
                <div className="container">
                    <TestimonialsTitle />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="clients-review-carousel owl-carousel owl-theme">
                                {mock.map(i =>
                                    <TestimonialItem
                                        key={i.id}
                                        image={i.image}
                                        desc={i.desc}
                                        name={i.name}
                                    />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;