import React, { Component } from 'react';

class VideoArea extends Component {
    render() {
        return (
            <div className="video-area padding-xl text-center bg-fixed text-light shadow dark-hard" style={{ backgroundImage: 'url(assets/img/banner/15.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="video-heading">
                                <h2>Take a short tour in our campus</h2>
                                <p>
                                    Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="video-info">
                            <div className="overlay-video">
                                <a className="popup-youtube video-play-button" href="https://www.youtube.com/watch?v=8GQTt50izkg">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default VideoArea;