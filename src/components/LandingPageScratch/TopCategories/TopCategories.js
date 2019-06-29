import React, { Component } from 'react';
import TopCategoriesHeading from './TopCategoriesHeading';
import TopItems from './TopItems';
import topmock from './topmock.json';

class TopCategories extends Component {
    render() {
        return (
            <div>
                <div id="top-categories" class="top-cat-area bg-gray default-padding bottom-less">
                    <div class="container">
                        <TopCategoriesHeading />
                        <div class="top-cat-items">
                            <div class="row">
                                {topmock.map(i =>
                                    <TopItems
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