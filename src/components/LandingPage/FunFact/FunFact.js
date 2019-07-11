import React, { Component } from 'react';
import FunItem from '../../Common/FunItem';
import mock from './mock.json';

class FunFact extends Component {
    render() {
        return (
            <div className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard"
                style={{ backgroundImage: 'url(assets/img/banner/2.jpg)' }}>
                <div className="container">
                    {mock.map(i =>
                        <FunItem
                            key={i.icon}
                            class={i.class}
                            icon={i.icon}
                            to={i.to}
                            speed={i.speed}
                            title={i.title}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default FunFact;