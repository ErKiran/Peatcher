import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Topsearch from './Topsearch';
import AttributeNavigation from './AttributeNavigation';
import NavHeader from './NavHeader';
import NavInfo from './NavInfo';
import SideNav from './SideNav';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav className="navbar navbar-default navbar-sticky bootsnav">
                    <Topsearch />
                    <AttributeNavigation />
                    <NavHeader />
                    <NavInfo >
                    <Link to="/register">Sign Up</Link>
                    </NavInfo>
                    <SideNav />
                </nav>
            </header>
        );
    }
}

export default Header;