import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Breadcrumb from '../Layouts/Breadcrumb';
import Footer from '../Layouts/Footer/Footer';
import SigleItems from './SigleItems';
import Pagination from './Pagination';
import Sidebar from './Sidebar/Sidebar';


class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb h1="Blog" li1="Home" li2="About us" li3="Blog" />
                <SigleItems />
                <Pagination />
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default Blog;