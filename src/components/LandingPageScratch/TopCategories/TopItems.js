import React, { Component } from 'react';

class TopItems extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3 col-sm-6 equal-height">
                    <div className="item" style={{ backgroundImage: this.props.background_image }}>
                        <a href="#">
                            <i className={this.props.icon}></i>
                            <div className="info">
                                <h4>{this.props.title}</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopItems;