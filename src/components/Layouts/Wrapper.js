import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Wrapper;