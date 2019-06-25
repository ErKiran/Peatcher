import React, { Component } from 'react';
import Items from './Items';
import SearchBar from './SearchBar';

class Features extends Component {
    render() {
        return (
            <>
                <SearchBar />
                <Items />
            </>
        );
    }
}

export default Features;