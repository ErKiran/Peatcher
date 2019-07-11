import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <div className="side" >
                <a href="#" className="close-side">
                    <i className="fa fa-times"></i>
                </a>
                <div className="widget">
                    <h4 className="title">My Account</h4>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Edit Profile</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav;