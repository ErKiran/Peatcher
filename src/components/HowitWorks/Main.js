import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="top-cat-items">
                        <div className="col-md-4 col-sm-4  equal-height">
                            <div className="item" style={{ backgroundColor: '#ffb606' }}>
                                <a>
                                    <i className="flaticon-feature" />
                                    <div className="info">
                                        <h4>For Student</h4>
                                        <button onClick="forstuden()" id="forstudent" style={{ background: '#ffb606 none repeat scroll 0 0', border: 'medium none', display: 'inline-block', fontWeight: 600, marginTop: '10px', padding: '8px 50px', textTransform: 'uppercase' }}>See Here</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 equal-height">
                            <div className="item" style={{ backgroundColor: '#ffb606' }}>
                                <a>
                                    <i className="flaticon-interaction" />
                                    <div className="info">
                                        <h4>For Parents </h4>
                                        <button onClick="forparen()" id="forparent" style={{ background: '#ffb606 none repeat scroll 0 0', border: 'medium none', display: 'inline-block', fontWeight: 600, marginTop: '10px', padding: '8px 50px', textTransform: 'uppercase' }}>See Here</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 equal-height">
                            <div className="item" style={{ backgroundColor: '#ffb606' }}>
                                <a>
                                    <i className="flaticon-conveyor" />
                                    <div className="info">
                                        <h4>For Teacher</h4>
                                        <button onClick="forteache()" id="forteacherss" style={{ background: '#ffb606 none repeat scroll 0 0', border: 'medium none', display: 'inline-block', fontWeight: 600, marginTop: '10px', padding: '8px 50px', textTransform: 'uppercase' }}>See Here</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                        <div>
                            <div className="row" id="forstud" style={{ display: 'none' }}>
                                <div className="wt-starthiringhold wt-innerspace wt-haslayout">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 float-left">
                                        <div className="wt-starthiringcontent">
                                            <div className="wt-sectionhead">
                                                <div className="wt-sectiontitle" style={{ marginBottom: '0px !important' }}>
                                                    <h2>How To Start Learning</h2>
                                                    <span>Start Today For a Great Future</span>
                                                </div>
                                                <div className="wt-description">
                                                    <p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid <a href="javascript:void(0);">Learn more</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 float-right">
                                        <div className="wt-howtoworkimg">
                                            <figure>
                                                <img src="images/work/img-01.jpg" alt="img description" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ display: 'none' }} id="forpar">
                                <div className="wt-starthiringhold wt-innerspace wt-haslayout">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 float-right">
                                        <div className="wt-starthiringcontent">
                                            <div className="wt-sectionhead">
                                                <div className="wt-sectiontitle" style={{ marginBottom: '0px !important' }}>
                                                    <h2>Keep Track Of Performance</h2>
                                                    <span>Focus on Your Work &amp; Team</span>
                                                </div>
                                                <div className="wt-description">
                                                    <p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid learn <a href="javascript:void(0);">more</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 float-left">
                                        <div className="wt-howtoworkimg">
                                            <figure>
                                                <img src="images/work/img-02.jpg" alt="img description" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="forteach" style={{ display: 'none' }}>
                                <div className="wt-starthiringhold wt-innerspace wt-haslayout">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 float-left">
                                        <div className="wt-starthiringcontent">
                                            <div className="wt-sectionhead">
                                                <div className="wt-sectiontitle" style={{ marginBottom: '0px !important' }}>
                                                    <h2>Making Serious Profit</h2>
                                                    <span>Manage Your Profitable Account</span>
                                                </div>
                                                <div className="wt-description">
                                                    <p>Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua eniina ilukita ylokem lokateise ination voluptate velite esse cillum dolore eu fugnulla pariatur lokaim urianewce animid learn <a href="javascript:void(0);">more</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 float-right">
                                        <div className="wt-howtoworkimg">
                                            <figure>
                                                <img src="images/work/img-03.jpg" alt="img description" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;