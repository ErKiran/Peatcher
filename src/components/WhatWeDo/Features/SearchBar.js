import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div class="search-course">
                <div className="col-md-12">
                    <div className="heading text-center text-light">
                        <h2>Learn a new skill online on your time</h2>
                        <h4>5,000 Online Courses</h4>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Enter course name" className="form-control" name="text" />
                        <button type="submit">
                            Search Courses
                                </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;