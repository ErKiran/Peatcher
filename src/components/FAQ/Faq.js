import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';

import AccordionFAQ from './AccordionFAQ';

class Faq extends Component {
    render() {
        return (
            <div>
                <Breadcrumb
                    h1="FAQ"
                    li1="Home"
                    li2="Security"
                    li3="FAQ"
                    background="url(assets/img/banner/10.jpg)"
                />
                <div className="faq-area left-sidebar course-details-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 "></div>
                            <AccordionFAQ />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;