import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Dropdown extends Component {
    render() {
        return (
            <li className="dropdown">
                <Link to={this.props.mainLink} className="dropdown-toggle active" data-toggle="dropdown" >{this.props.title}</Link>
                <ul className="dropdown-menu">
                    <li><Link to={this.props.l1link}>{this.props.l1}</Link></li>
                    <li><Link to={this.props.l2link}>{this.props.l2}</Link></li>
                    <li><Link to={this.props.l3link}>{this.props.l3}</Link></li>
                </ul>
            </li>
        );
    }
}

export default Dropdown;