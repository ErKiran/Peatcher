import React, { Component } from 'react';

class SingleItems extends Component {
    render() {
        return (
            <div>
                <div className="item horizontal col-md-12">
                    <div className="col-md-6 thumb bg-cover" style={{ backgroundImage: 'url(assets/img/event/1.jpg)' }}>
                        <div className="date">
                            <h4><span>12</span> Dec, 2018</h4>
                        </div>
                    </div>
                    <div className="col-md-6 info">
                        <h4>
                            <a href="#">Secondary Schools United Nations</a>
                        </h4>
                        <div className="meta">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> 15 Oct, 2019</li>
                                <li><i className="fas fa-clock"></i>  8:00 AM - 5:00 PM</li>
                                <li><i className="fas fa-map"></i> California, TX 70240 </li>
                            </ul>
                        </div>
                        <p>
                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                </p>
                        <a href="#" className="btn btn-dark effect btn-sm">
                            <i className="fas fa-chart-bar"></i> Book Now
                </a>
                        <a href="#" className="btn btn-gray btn-sm">
                            <i className="fas fa-ticket-alt"></i> 23 Available
                </a>
                    </div>
                </div>

                <div className="item vertical col-md-6">
                    <div className="thumb">
                        <img src="assets/img/event/2.jpg" alt="Thumb" />
                        <div className="date">
                            <h4><span>27</span> Feb, 2019</h4>
                        </div>
                    </div>
                    <div className="info">
                        <h4>
                            <a href="#">Social Science & Humanities</a>
                        </h4>
                        <div className="meta">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> 15 Oct, 2019</li>
                                <li><i className="fas fa-clock"></i>  8:00 AM - 5:00 PM</li>
                                <li><i className="fas fa-map"></i> California, TX 70240 </li>
                            </ul>
                        </div>
                        <p>
                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                    </p>
                        <a href="#" className="btn btn-dark effect btn-sm">
                            <i className="fas fa-chart-bar"></i> Book Now
                    </a>
                        <a href="#" className="btn btn-gray btn-sm">
                            <i className="fas fa-ticket-alt"></i> 54 Available
                    </a>
                    </div>
                </div>

                <div className="item vertical col-md-6">
                    <div className="thumb">
                        <img src="assets/img/event/3.jpg" alt="Thumb" />
                        <div className="date">
                            <h4><span>15</span> Mar, 2019</h4>
                        </div>
                    </div>
                    <div className="info">
                        <h4>
                            <a href="#">Actualized Leadership Network Seminar</a>
                        </h4>
                        <div className="meta">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> 15 Oct, 2019</li>
                                <li><i className="fas fa-clock"></i>  8:00 AM - 5:00 PM</li>
                                <li><i className="fas fa-map"></i> California, TX 70240 </li>
                            </ul>
                        </div>
                        <p>
                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                            </p>
                        <a href="#" className="btn btn-dark effect btn-sm">
                            <i className="fas fa-chart-bar"></i> Book Now
                            </a>
                        <a href="#" className="btn btn-gray btn-sm">
                            <i className="fas fa-ticket-alt"></i> 127 Available
                            </a>
                    </div>
                </div>

                <div className="item horizontal col-md-12">
                    <div className="col-md-6 thumb bg-cover" style={{ backgroundImage: 'url(assets/img/event/4.jpg)' }}>
                        <div className="date">
                            <h4><span>24</span> Apr, 2019</h4>
                        </div>
                    </div>
                    <div className="col-md-6 info">
                        <h4>
                            <a href="#">International Conference on Art Business</a>
                        </h4>
                        <div className="meta">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> 15 Oct, 2019</li>
                                <li><i className="fas fa-clock"></i>  8:00 AM - 5:00 PM</li>
                                <li><i className="fas fa-map"></i> California, TX 70240 </li>
                            </ul>
                        </div>
                        <p>
                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                    </p>
                        <a href="#" className="btn btn-dark effect btn-sm">
                            <i className="fas fa-chart-bar"></i> Book Now
                    </a>
                        <a href="#" className="btn btn-gray btn-sm">
                            <i className="fas fa-ticket-alt"></i> 67 Available
                    </a>
                    </div>
                </div>

                <div className="more-btn col-md-12 text-center">
                    <a href="#" className="btn btn-dark border btn-md">View All Events</a>
                </div>




            </div>
        );
    }
}

export default SingleItems;