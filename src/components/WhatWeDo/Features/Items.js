import React, { Component } from 'react';
import Item from './Item';
import SearchBar from './SearchBar';

class Items extends Component {
    render() {
        return (
            <div className="our-featues-area about-area default-padding bg-dark">
                <div className="container">
                    <div className="row">
                        <SearchBar />
                        <div className="our-features">
                            <Item
                                itemclass="item mariner"
                                icon="flaticon-faculty-shield"
                                title="Expert faculty"
                                linktext="Read More"
                            />
                            <Item
                                itemclass="item java"
                                icon="flaticon-book-2"
                                title="Online learning"
                                linktext="Read More"
                            />
                            <Item
                                itemclass="item malachite"
                                icon="flaticon-education"
                                title="Scholarship"
                                linktext="Read More"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Items;