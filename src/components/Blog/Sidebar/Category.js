import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="sidebar-item category">
                <div className="title">
                    <h4>Category</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        <li>
                            <a href="#">Java Programming <span>23</span></a>
                        </li>
                        <li>
                            <a href="#">Social Science <span>0</span></a>
                        </li>
                        <li>
                            <a href="#">Business Management <span>12</span></a>
                        </li>
                        <li>
                            <a href="#">Online Learning <span>17</span></a>
                        </li>
                        <li>
                            <a href="#">Course Management <span>0</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Category;