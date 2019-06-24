import React, { Component } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FooterDescArea from '../Layout/FooterDescArea';
import NewsLetterArea from '../Layout/NewsLetterArea';
import Accountarea from './Accoutarea';
import Breadcumb from './Breadcumb';

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcumb />
                <Accountarea />
                <NewsLetterArea />
                <FooterDescArea />
                <Footer />
            </div>
        );
    }
}

export default Login;