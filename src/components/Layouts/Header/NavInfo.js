import React, { Component } from 'react';

class NavInfo extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                    <li >
                        <a href="index.html" className="active" >Home</a>
                    </li>
                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >About Us</a>
                        <ul className="dropdown-menu">
                            <li><a href="about-us.html">Who are We?</a></li>
                            <li><a href="contact.html">Get in Touch With Us</a></li>
                            <li><a href="blog.html">Blog</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >Our Concept</a>
                        <ul className="dropdown-menu">
                            <li><a href="what-we-do.html">What do we do?</a></li>
                            <li><a href="why-us.html">Why Us</a></li>
                            <li><a href="#">How does it works?</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >Security</a>
                        <ul className="dropdown-menu">
                            <li><a href="trust-safety.html">Trust & Safety</a></li>
                            <li><a href="Privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="faq.html">FAQ</a></li>

                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >Partnet with us</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Affiliation</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="event.html">Events/Donation</a></li>

                        </ul>
                    </li>
                    <li>
                        <a href="register.html">Sign Up</a>
                    </li>
                    <li className="dropdown">
                        <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown" >Languages</a>
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