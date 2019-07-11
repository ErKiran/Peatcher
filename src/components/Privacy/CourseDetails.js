import React, { Component } from 'react';
import ShortVersion from './ShortVersion';
import LongVersion from './LongVersion';
import TopInfo from './TopInfo';
import VersionOption from './VersionOption';

class CourseDetails extends Component {
    render() {
        return (
            <div className="course-details-area default-padding">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1" style={{ backgroundColor: 'f7f7f7' }}>
                            <div className="course-details-info">
                                <div className="tab-info">
                                    <TopInfo />
                                    <VersionOption />
                                    <div className="tab-content tab-content-info">
                                        <ShortVersion />
                                        <LongVersion />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetails;