import React, { Component } from 'react';
import Search from './Search';
import Archives from './Archives';
import Category from './Category';
import Gallery from './Gallery';
import RecentPost from './RecentPost';
import Social from './Social';
import Tags from './Tags';

class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar col-md-4">
                <aside>
                    <Search />
                    <Category />
                    <RecentPost />
                    <Archives />
                    <Gallery />
                    <Social />
                    <Tags />
                </aside>
            </div>
        );
    }
}

export default Sidebar;