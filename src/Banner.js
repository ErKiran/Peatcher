import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <header id="home">
                {/* Start Navigation */}
                <nav className="navbar navbar-default navbar-sticky bootsnav">
                    {/* Start Top Search */}
                    <div className="container">
                        <div className="row">
                            <div className="top-search">
                                <div className="input-group">
                                    <form action="#">
                                        <input type="text" name="text" className="form-control" placeholder="Search" />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Top Search */}
                    <div className="container">
                        {/* Start Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search" /></a></li>
                            </ul>
                        </div>
                        {/* End Atribute Navigation */}
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo.jpg" className="logo" alt="Logo" />
                            </a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                <li>
                                    <a href="index.html" className="active">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">About Us</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">Who are We?</a></li>
                                        <li><a href="contact.html">Get in Touch With Us</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Our Concept</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="what-we-do.html">What do we do?</a></li>
                                        <li><a href="why-us.html">Why Us</a></li>
                                        <li><a href="#">How does it works?</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Security</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="trust-safety.html">Trust &amp; Safety</a></li>
                                        <li><a href="Privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Partnet with us</a>
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
                                    <a href="about-us.html" className="dropdown-toggle active" data-toggle="dropdown">Languages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Arabic</a></li>
                                        <li><a href="#">French</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>{/* /.navbar-collapse */}
                    </div>
                </nav>
                {/* End Navigation */}
            </header>

        );
    }
}

export default Banner;