import React, { Component } from 'react';
import TestimonialsTitle from './TestimonialsTitle';
import TestimonialItem from './TestimonialItem';
import mock from './mock.json'

class Testimonials extends Component {
    render() {
        return (
            <div class="testimonials-area carousel-shadow default-padding bg-dark text-light">
                <div class="container">
                    <TestimonialsTitle />
                    <div class="row">
                        <div class="col-md-12">
                            <div class="clients-review-carousel owl-carousel owl-theme">
                                {mock.map(i =>
                                    <TestimonialItem
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