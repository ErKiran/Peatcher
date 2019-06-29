import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchCourse extends Component {
    render() {
        return (
            <div className="search-course">
                <div className="col-md-12">
                    <div className="heading text-center text-light">
                        <h2>Learn a new skill online on your time</h2>
                        <h4>5,000 Online Courses</h4>
                    </div>
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default SearchCourse;