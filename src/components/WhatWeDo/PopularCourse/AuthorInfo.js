import React, { Component } from 'react';

class AuthorInfo extends Component {
    render() {
        return (
            <div class="author-info">
                <div class="thumb">
                    <a href="#"><img src={this.props.image_src} alt="Thumb" /></a>
                </div>
                <div class="others">
                    <a href="#">{this.props.author_name}</a>
                </div>
            </div>
        );
    }
}

export default AuthorInfo;