import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
    render() {
        return (
            <div className="top-cat-area inc-trending-courses about-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 top-cat-items text-light inc-bg-color text-center">
                            <div className="row">
                                <Option
                                    background_image="url(assets/img/category/3.jpg)"
                                    icon="flaticon-teacher-lecture-in-front-an-auditory"
                                    title="Be A Teacher!"
                                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus"
                                    button_text="Get Started"
                                />
                                <Option
                                    background_image="url(assets/img/category/1.jpg)"
                                    icon="flaticon-learning"
                                    title="Be A Student!"
                                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus"
                                    button_text="Get Started"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Options;