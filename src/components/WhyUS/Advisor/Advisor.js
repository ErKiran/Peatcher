import React, { Component } from 'react';
import SigleItem from './SingleItem';
import Title from './Title';

class Advisor extends Component {
    render() {
        return (
            <section id="advisor" className="advisor-area bg-gray carousel-shadow default-padding bottom-less">
                <div className="container">
                    <Title />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                                <SigleItem
                                    image="assets/img/advisor/1.jpg"
                                    name="Professor. Nuri Paul"
                                    rolein="Chemistry specialist"
                                />
                                <SigleItem
                                    image="assets/img/advisor/2.jpg"
                                    name="Monayem Pruda"
                                    rolein="Senior Developer"
                                />
                                <SigleItem
                                    image="assets/img/advisor/3.jpg"
                                    name="Dr. Bubly Minu"
                                    rolein="Science specialist"
                                />
                                <SigleItem
                                    image="assets/img/advisor/4.jpg"
                                    name="Professor. John Doe"
                                    rolein="Senior Writter"
                                />
                                <SigleItem
                                    image="assets/img/advisor/5.jpg"
                                    name="Professor. John Doe"
                                    rolein="Senior Writter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advisor;