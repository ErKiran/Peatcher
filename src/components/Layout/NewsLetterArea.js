import React, { Component } from 'react';

class NewsLetterArea extends Component {
    render() {
        return (
            <div className="newsletter-area ptb-70 bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="newsletter-wrap">
                                <h2>Subscribe To Our Newsletter</h2>
                                <p>Keep yourself updated with our bonus and offers. </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="newsletter-wrap">
                                <form action="#">
                                    <input type="email" placeholder="Enter your email here..." />
                                    <button className="btn-style">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewsLetterArea;