import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import SingleItems from './SingleItems';

class Event extends Component {
    render() {
        return (
            <div>
                <Breadcrumb h1="Event" li1="Home" li2="Partner With Us" li3="Event" background="url(assets/img/banner/4.jpg)" />
                <section id="event" class="event-area default-padding">
                    <div class="container">
                        <div class="row">
                            <div class="event-items">
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