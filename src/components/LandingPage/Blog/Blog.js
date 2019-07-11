import React, { Component } from 'react';
import BlogHeading from './BlogHeading';
import BlogItem from './BlogItem';
import mock from './mock.json';

class Blog extends Component {
    render() {
        return (
            <div id="blog" className="blog-area default-padding bottom-less">
                <div className="container">
                    <BlogHeading />
                    <div className="row">
                        <div className="blog-items">
                            {mock.map(i =>
                                <BlogItem
                                    image={i.image}
                                    date={i.date}
                                    day={i.day}
                                    title={i.title}
                                    desc={i.desc}
                                />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;