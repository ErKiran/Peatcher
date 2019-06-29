import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form action="#">
                <input type="text" placeholder="Enter course name" className="form-control" name="text" />
                <button type="submit">
                    Search Courses
                </button>
            </form>
        );
    }
}

export default SearchBar;