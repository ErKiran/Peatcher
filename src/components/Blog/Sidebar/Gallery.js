import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div className="sidebar-item gallery">
                <div className="title">
                    <h4>Gallery</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-1.jpg" alt="thumb" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-2.jpg" alt="thumb" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-3.jpg" alt="thumb" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-4.jpg" alt="thumb" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-5.jpg" alt="thumb" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/blog/thumb-6.jpg" alt="thumb" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Gallery;