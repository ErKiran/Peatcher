import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import SingleItems from './SingleItems';

class Event extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="Event" li1="Home" li2="Partner With Us" li3="Event" />
                <section id="event" class="event-area default-padding">
                    <div class="container">
                        <div class="row">
                            <div class="event-items">
                                <SingleItems />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Event;