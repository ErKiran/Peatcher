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
                <div className="blog-area full-blog left-sidebar full-blog default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="blog-items">
                                <SigleItems />
                                <Sidebar />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;