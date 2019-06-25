import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavInfo extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                    <li >
                        <Link to="/" className="active" >Home</Link>
                    </li>
                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >About Us</a>
                        <ul className="dropdown-menu">
                            <li><Link to="/About">Who are We?</Link></li>
                            <li><Link to="/Contact">Get in Touch With Us</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="/About" className="dropdown-toggle active" data-toggle="dropdown" >Our Concept</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/What_we_do">What do we do?</Link></li>
                            <li><Link to="/Why_us">Why Us</Link></li>
                            <li><a href="#">How does it works?</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/About" className="dropdown-toggle active" data-toggle="dropdown" >Security</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/trust_safety">Trust & Safety</Link></li>
                            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>

                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/About" className="dropdown-toggle active" data-toggle="dropdown" >Partnet with us</Link>
                        <ul className="dropdown-menu">
                            <li><a href="#">Affiliation</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><Link to="/event">Events/Donation</Link></li>

                        </ul>
                    </li>
                    <li>
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li className="dropdown">
                        <Link to="/About" className="dropdown-toggle active" data-toggle="dropdown" >Languages</Link>
                        <ul className="dropdown-menu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Arabic</a></li>
                            <li><a href="#">French</a></li>

                        </ul>
                    </li>
                </ul>
            </div>

        );
    }
}

export default NavInfo;