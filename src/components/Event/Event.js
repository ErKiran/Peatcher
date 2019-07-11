import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import SingleItems from './SingleItems';

class Event extends Component {
    render() {
        return (
            <div>
                <Breadcrumb h1="Event" li1="Home" li2="Partner With Us" li3="Event" background="url(assets/img/banner/4.jpg)" />
                <section id="event" className="event-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="event-items">
                                <SingleItems />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Event;