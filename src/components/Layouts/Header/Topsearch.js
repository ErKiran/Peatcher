import React, { Component } from 'react';

class Topsearch extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="top-search">
                        <div className="input-group">
                            <form action="#">
                                <input type="text" name="text" className="form-control" placeholder="Search" />
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topsearch;