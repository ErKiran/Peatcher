import React, { Component } from 'react';

class AttributeNavigation extends Component {
    render() {
        return (
            <div>
                <div className="attr-nav">
                    <ul>
                        <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AttributeNavigation;