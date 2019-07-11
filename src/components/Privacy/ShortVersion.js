import React, { Component } from 'react';
import Paragraph from '../Common/Paragraph';

class ShortVersion extends Component {
    render() {
        return (
            <div id="tab1" className="tab-pane fade active in">
                <div className="info title">
                <Paragraph 
                text="At Fiverr we care about your privacy.
                 We do not sell or rent your personal information to third parties for their direct marketing purposes without your explicit consent.
                  We do not disclose it to others except as disclosed in this Policy or required to provide you with the services of the Site and mobile applications, meaning - to allow you to buy, sell, share the information you want to share on the Site; to contribute on the forum; pay for products; post reviews and so on; or where we have a legal obligation to do so.
                "/>
                <Paragraph 
                text="We collect information that you provide us or voluntarily share with other users, and also some general technical information that is automatically gathered by our systems, such as IP address, browser information and cookies to enable you to have a better user experience and a more personalized browsing experience.
                "
                />
                <Paragraph
                text="We will not share information that you provide us in the process of the registration - including your contact information - except as described in this Policy.
                "
                />  
                <Paragraph
                text="Information that you choose to publish on the Site (photos, videos, text, music, reviews, deliveries) - is no longer private, just like any information you publish online.
                "
                />  
                <Paragraph
                text="Technical information that is gathered by our systems, or third party systems, automatically may be used for Site operation, optimization, analytics, content promotion and enhancement of user experience. In accordance with applicable local law, we may use your information to contact you - to provide notices related to your activities, or offer you promotions and general updates, but we will not let any other person, including sellers and buyers, contact you, other than through your user profile on the Site.
                "
                />  
                <Paragraph
                text="Your personal information may be stored in systems based around the world, and may be processed by third party service providers acting on our behalf. These providers may be based in countries that do not provide an equivalent level of protection for privacy as that enjoyed in the country in which you live. In that case, we will provide for adequate safeguards to protect your personal information.
                "
                />  
                <Paragraph
                text="You can exercise your rights over your personal information, by opening a Customer Relations ticket. If you do not have an active Fiverr account, please contact us at privacy@fiverr.com. More details about the rights applicable to you are in the long version of the Policy.
                "
                />  
                <Paragraph
                text="The above are just the highlights. We encourage you to read more about the information we collect, how we use it, understand the meaning of cookie (no, you can’t eat it) and more in the long version of our Policy below.
                "
                />  
                </div>
            </div>
        );
    }
}

export default ShortVersion;