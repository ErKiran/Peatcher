import React, { Component } from 'react';
import Breadcrumb from '../Layouts/Breadcrumb';
import SigleItems from './SigleItems';
import Pagination from './Pagination';
import Sidebar from './Sidebar/Sidebar';


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 800)
    }
    render() {
        if (this.state.loading === true) {
            return <div className="se-pre-con"></div>
        } else {
            return (
                <div>
                    <Breadcrumb
                        h1="Blog"
                        li1="Home"
                        li2="About us"
                        li3="Blog"
                        background="url(assets/img/banner/12.jpg)"
                    />
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
                </div>
            );
        }
    }
}

export default Blog;