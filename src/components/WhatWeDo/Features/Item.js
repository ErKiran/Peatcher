import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4">
                <div className={this.props.itemclass}>
                    <div className="icon">
                        <i className={this.props.icon}></i>
                    </div>
                    <div className="info">
                        <h4>{this.props.title}</h4>
                        <a href="#">{this.props.linktext}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;