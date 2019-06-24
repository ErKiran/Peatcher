import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div>
                <a className="left carousel-control" href="#bootcarousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#bootcarousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        );
    }
}

export default Controls;