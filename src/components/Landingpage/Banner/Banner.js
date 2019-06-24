import React, { Component } from 'react';
import Slides from './Slides';
import Controls from './Controls';

class Banner extends Component {
    render() {
        return (
                <div className="banner-area content-top-heading less-paragraph text-normal">
                    <div id="bootcarousel" className="carousel slide animate_text carousel-fade" data-ride="carousel">
                        <div>
                            <Slides />
                            <Controls />
                        </div>
                    </div>
                </div>
        );
    }
}

export default Banner;