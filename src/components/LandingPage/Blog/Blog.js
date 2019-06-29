import React, { Component } from 'react';
import BlogHeading from './BlogHeading';
import BlogItem from './BlogItem';
import mock from './mock.json';

class Blog extends Component {
    render() {
        return (
            <div id="blog" class="blog-area default-padding bottom-less">
                <div class="container">
                    <BlogHeading />
                    <div class="row">
                        <div class="blog-items">
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