import React, { Component } from 'react';

class TopInfo extends Component {
    render() {
        return (
            <div className="top-info">
                <div className="title">
                    <h2 style={{ marginTop: '20px', marginBottom: '0px' }}>Peatcher's Privacy Policy</h2>
                    <h4>Last Updated: 03 June 2019</h4>
                </div>
                <p style={{ textAlign: 'justify' }}>
                    Please read this privacy policy (the “Policy”) carefully to understand how we use your personal information. If you do not agree with this Policy, your choice is not to use Fiverr.com (the “Site”). By accessing or using this Site, you agree to this Policy. This Policy may change from time to time; any changes we make to this Policy will be posted on this Site, we may also take any other steps, to the extent required by applicable law, including notifying you and/or seeking your explicit consent to material changes. Changes to this Policy are effective as of the stated "Last Updated" date. Other than where we have sought such explicit consent from you, your continued use of the Site after we make changes will constitute acceptance of, and agreement to be bound by, those changes, so please check the Policy periodically for any updates or changes.
                </p>
            </div>
        );
    }
}

export default TopInfo;