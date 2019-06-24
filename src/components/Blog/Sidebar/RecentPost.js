import React, { Component } from 'react';

class RecentPost extends Component {
    render() {
        return (
            <div className="sidebar-item recent-post">
                <div className="title">
                    <h4>Recent Posts</h4>
                </div>

                <div className="item">
                    <div className="content">
                        <div className="thumb">
                            <a href="#">
                                <img src="assets/img/courses/g1.jpg" alt="Thumb" />
                            </a>
                        </div>
                        <div className="info">
                            <h4>
                                <a href="#">Profession paython learing</a>
                            </h4>

                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="thumb">
                            <a href="#">
                                <img src="assets/img/courses/g2.jpg" alt="Thumb" />
                            </a>
                        </div>
                        <div className="info">
                            <h4>
                                <a href="#">Social Science & Humanities</a>
                            </h4>

                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="thumb">
                            <a href="#">
                                <img src="assets/img/courses/g3.jpg" alt="Thumb" />
                            </a>
                        </div>
                        <div className="info">
                            <h4>
                                <a href="#">Actualized Leadership Network Seminar</a>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentPost;