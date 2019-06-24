import React, { Component } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FooterDescArea from '../Layout/FooterDescArea';
import NewsLetterArea from '../Layout/NewsLetterArea';
import Breadcumb from './Breadcumb';
import AccountArea from './AccountArea';

class Account extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcumb />
                <AccountArea />
                <NewsLetterArea />
                <FooterDescArea />
                <Footer />
            </div>
        );
    }
}

export default Account;