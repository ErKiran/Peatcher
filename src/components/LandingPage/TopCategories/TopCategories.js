import React, { Component } from 'react';
import TopCategoriesHeading from './TopCategoriesHeading';
import TopItems from './TopItems';
import topmock from './topmock.json';

class TopCategories extends Component {
    render() {
        return (
            <div>
                <div id="top-categories" className="top-cat-area bg-gray default-padding bottom-less">
                    <div className="container">
                        <TopCategoriesHeading />
                        <div className="top-cat-items">
                            <div className="row">
                                {topmock.map(i =>
                                    <TopItems
                                        key={i.id}
                                        background_image={i.background_image}
                                        icon={i.icon}
                                        title={i.title}
                                    />
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TopCategories;