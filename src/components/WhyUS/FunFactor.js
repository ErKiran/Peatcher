import React, { Component } from 'react';
import FunItem from '../Common/FunItem';

class FunFactor extends Component {
    render() {
        return (
            <div className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard" style={{ backgroundImage: 'url(assets/img/banner/2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <FunItem
                            icon="flaticon-contract"
                            to="212"
                            speed="5000"
                            title="Awards Achieve"
                        />
                        <FunItem
                            icon="flaticon-professor"
                            to="128"
                            speed="5000"
                            title="Satisfied Parents"
                        />
                        <FunItem
                            icon="flaticon-online"
                            to="300"
                            speed="5000"
                            title="Students Enrolled"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFactor;