import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
class NavInfo extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                    <li >
                        <Link to="/" className="active" >Home</Link>
                    </li>
                    <Dropdown
                        mainLink="/about"
                        title="About Us"
                        l1="Who are We?"
                        l2="Get in Touch With Us"
                        l3="Blog"
                        l1link="/About"
                        l2link="/Contact"
                        l3link="/Blog"
                    />
                    <Dropdown
                        mainLink="/What_we_do"
                        title="Our Concept"
                        l1="What do we do?"
                        l2="Why Us"
                        l3="How does it works?"
                        l1link="/What_we_do"
                        l2link="/Why_us"
                        l3link=""
                    />
                    <Dropdown
                        mainLink="/trust_safety"
                        title="Security"
                        l1="Trust & Safety"
                        l2="Privacy Policy"
                        l3="FAQ"
                        l1link="/trust_safety"
                        l2link="/privacy_policy"
                        l3link="/faq"
                    />
                    <Dropdown
                        mainLink="/event"
                        title="Partner with us"
                        l1="Affiliation"
                        l2="Advertising"
                        l3="Events/Donation"
                        l1link=""
                        l2link=""
                        l3link="/event"
                    />
                    <li>
                        {this.props.children}
                    </li>
                    <Dropdown
                        mainLink="/About"
                        title="Languages"
                        l1="English"
                        l2="Arabic"
                        l3="French"
                        l1link=""
                        l2link=""
                        l3link=""
                    />
                </ul>
            </div>
        );
    }
}

export default NavInfo;