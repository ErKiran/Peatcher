import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 pagi-area">
                    <nav aria-label="navigation">
                        <ul className="pagination">
                            <li><a href="#">Previous</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Pagination;