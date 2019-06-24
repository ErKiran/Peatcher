import React, { Component } from 'react';

class SearchArea extends Component {
    render() {
        return (
            <div className="search-area ptb-70 bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12">
                            <div className="search-wrap text-center">
                                <h2>Search Any Item from here</h2>
                                <form action="#">
                                    <input type="text" placeholder="Search products here..." />
                                    <select name="select" className="select-one">
                                        <option value="All Categories">All Categories</option>
                                        <option value="#">PHP</option>
                                        <option value="#">HTML</option>
                                        <option value="#">CSS</option>
                                        <option value="#">Node.js</option>
                                        <option value="#">React.js</option>
                                    </select>
                                    <select name="select" className="select-two">
                                        <option value="All Categories">Sub Categories</option>
                                        <option value="All Categories">All Categories</option>
                                        <option value="#">PHP</option>
                                        <option value="#">HTML</option>
                                        <option value="#">CSS</option>
                                        <option value="#">Node.js</option>
                                        <option value="#">React.js</option>
                                    </select>
                                    <button className="btn-style">Search Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchArea;