import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import Accordion from './Accordion';

class Faq extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="FAQ" li1="Home" li2="Security" li3="FAQ" />
                <div class="faq-area left-sidebar course-details-area default-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 "></div>
                            <Accordion />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Faq;