import React, { Component } from 'react';
import Topsearch from './Topsearch';
import AttributeNavigation from './AttributeNavigation';
import NavHeader from './NavHeader';
import NavInfo from './NavInfo';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-sticky bootsnav">
                <Topsearch />
                <AttributeNavigation />
                <NavHeader />
                <NavInfo />
            </nav>
        );
    }
}

export default Header;