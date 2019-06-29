import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <div className="col-md-6 col-sm-6 equal-height">
                <div className="item malachite" style={{ backgroundImage: this.props.background_image }}>
                    <a href="#">
                        <i className={this.props.icon} />
                        <div className="info">
                            <h4>{this.props.title}</h4>
                            <p> {this.props.desc}</p>
                            <span data-animation="animated slideInUp" className="btn btn-light border btn-md" href="#">{this.props.button_text}</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Option;