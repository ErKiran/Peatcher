import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="sidebar-item search">
                <div className="title">
                    <h4>Search</h4>
                </div>
                <div className="sidebar-info">
                    <form>
                        <input type="text" className="form-control" />
                        <input type="submit" value="search" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;