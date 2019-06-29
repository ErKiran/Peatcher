import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        return (
            <div className="col-md-4 single-item">
                <div className="item">
                    <div className="thumb">
                        <a href="#"><img src={this.props.image} alt="Thumb" /></a>
                        <div className="date">
                            <h4><span>{this.props.day}</span> {this.props.date}</h4>
                        </div>
                    </div>
                    <div className="info">
                        <h4>
                            <a href="#">{this.props.title}</a>
                        </h4>
                        <p>
                            {this.props.desc}
                        </p>
                        <a href="#">Read More <i className="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogItem;