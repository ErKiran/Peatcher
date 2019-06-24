import React, { Component } from 'react';

class Archives extends Component {
    render() {
        return (
            <div className="sidebar-item archives">
                <div className="title">
                    <h4>Archives</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        <li><a href="#">Aug 2019</a></li>
                        <li><a href="#">Sept 2019</a></li>
                        <li><a href="#">Nov 2019</a></li>
                        <li><a href="#">Dec 2019</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Archives;