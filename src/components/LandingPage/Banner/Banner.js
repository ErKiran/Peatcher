import React, { Component } from 'react';
import Items from './Items';
import Controls from './Controls';

class Banner extends Component {
    render() {
        return (
            <div className="banner-area content-top-heading less-paragraph text-normal">
                <div id="bootcarousel" className="carousel slide animate_text carousel-fade" data-ride="carousel">
                    <div className="carousel-inner text-light carousel-zoom">
                        <Items
                            item_type="item active"
                            background_image="url(assets/img/banner/1.jpg)"
                            left_text="Reach you career"
                            up_text="Learn from best online training Platform"
                            button1="Get Started"
                            button2="View Courses"
                        />
                        <Items
                            item_type="item"
                            background_image="url(assets/img/banner/2.jpg)"
                            left_text="We're glade to see you"
                            up_text="explore our brilliant Teachers"
                            button1="Get Started"
                            button2="View Courses"
                        />
                        <Controls />
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner;