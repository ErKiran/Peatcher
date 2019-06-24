import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return (
            <div className="sidebar-item tags">
                <div className="title">
                    <h4>tags</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        <li><a href="#">Fashion</a>
                        </li>
                        <li><a href="#">Education</a>
                        </li>
                        <li><a href="#">nation</a>
                        </li>
                        <li><a href="#">study</a>
                        </li>
                        <li><a href="#">health</a>
                        </li>
                        <li><a href="#">food</a>
                        </li>
                        <li><a href="#">travel</a>
                        </li>
                        <li><a href="#">science</a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Tags;