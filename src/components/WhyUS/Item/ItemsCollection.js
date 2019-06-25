import React, { Component } from 'react';
import Item from './Item';
import Heading from './Heading';

class ItemsCollection extends Component {
    render() {
        return (
            <>
            <div className="wcs-area bg-dark text-light">
        <div className="container-full">
            <div className="row">
                <div className="col-md-6 thumb bg-cover" style={{backgroundImage: 'url(assets/img/banner/16.jpg)'}}></div>
                <div className="col-md-6 content">
            <Heading/>
                <Item
                    icon="flaticon-trending"
                    linktext="Trending Courses"
                    paragraph="Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me."
                />
                <Item
                    icon="flaticon-books"
                    linktext="Books & Library"
                    paragraph=" Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.
                    "
                />
                <Item
                    icon="flaticon-professor"
                    linktext="Certified Teachers"
                    paragraph="Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me."
                />
            </div>
            </div>
            </div>
            </div>
            </>
        );
    }
}

export default ItemsCollection;