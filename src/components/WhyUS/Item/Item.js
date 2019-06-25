import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
                <div className="info">
                    <h4>
                        <a href="#">{this.props.linktext}</a>
                    </h4>
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default Item;