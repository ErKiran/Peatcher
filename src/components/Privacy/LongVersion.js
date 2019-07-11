import React, { Component } from 'react';
import Paragraph from '../Common/Paragraph';
import Accordion from '../Common/Accordion';
import DoubleCheck from '../Common/DoubleCheck';

class LongVersion extends Component {
    render() {
        return (
            <div id="tab2" className="tab-pane fade">
                <div className="info title">
                <Paragraph 
                text="Fiverr (including Fiverr Inc., Fiver International Ltd. and its affiliates) respects your privacy and is committed to protect the personal information of its users - buyers, sellers, collaborators and other visitors browsing the Site (“Users”). We believe that you have a right to know our practices regarding the information we collect when you visit and/or use the Site. This Policy explains our privacy practices for the Site and services provided by Fiverr. By accessing and/or using the Site and its related sites, applications, services, goods and/or registering for a Fiverr account and/or using it as a collaborator to share comments on a specific project, you agree to the terms and conditions of this Policy, including to our collection, use, disclosure, processing and retention of your personal information. You can also learn how to limit sharing of information in this Policy.
                "
                />
                <Accordion title="Information We Collect" href="#ac1" class="course-list-items acd-items acd-arrow">
                     <Paragraph text="When you register to the Site, or use it as collaborator, we ask you to provide certain personal information, including a valid email address, facebook or google account log in details and username. We may ask you to provide or otherwise collect additional information that you provide us, such as, your profile details, physical address, telephone number or other contact details, financial information (such as payment method and credit card number), details about other social networks linked accounts, details about your listed gigs, purchases, education, profession and expertise, and additional authentication information (such as your government issued ID, passport, or driving license, as permitted by applicable laws and as detailed in our Seller Help Center at “Verifying Your Identity”). We also collect information about your communications with Fiverr as well as communication with other users of Fiverr.
                     "/>
                     <Paragraph text="In addition, we collect information while you access, browse, view or otherwise use the Site. In other words, when you access the Site we are aware of your usage of the Site, and gather, collect and record the information relating to such usage, including geo-location information, IP address, device and connection information, browser information and web-log information, and all communications recorded by Users through the Site. We use that information to enhance user experience, personalize your browsing experience as well as monitor the Site for preventing fraud and inappropriate content or behaviour. We also collect supplemental information obtained from third parties such as demographic and navigation data, if applicable.
                     "/>
                     <Paragraph text="Additionally, in order to improve your online experience at Fiverr, we have implemented impression reporting. While you view our ads, we gather user Global Unique Identifier, HTTP request data like, user agent, IP, host, url, country/continent from which request made, browser info, device/operating system/operating system version.
                      "/>
                     <Paragraph text="Once you register, your username and additional information regarding your activity is made public and is visible to all Users of the Site. This information includes photos you upload, your published portfolio, Gig information, ratings, and additional information you may choose to add to your profile.
                      "/>  
                </Accordion>
                   
                <Accordion title="How do we collect Information?" href="#ac2" class="course-list-items acd-items acd-arrow">
                     <Paragraph 
                     text="You directly provide us with most of the information we collect. You do this by filling out the registration details on the Site, linking to your Fiverr account accounts of other social networks (please also see the External Links section below), completing application forms, skill tests and customer surveys (if any) as well as by posting and sharing additional information voluntarily. This can include information about sellers and their Gigs, User's location, education and profession, sharing of portfolio, ratings and feedbacks by buyers and anything you choose to add to your user profile."
                      />
                      <Paragraph 
                     text="We also collect technical information indirectly and automatically through our systems. This information includes logging your Internet Protocol (IP) address, software configuration, operating system and use of cookies (cookies are small files sent from us to your computer and sometimes back). Cookies ultimately help us improve your navigation and ease of use of our Site. You can find further information about Cookies in this Policy below, under Cookies.
                     "/>
                      <Paragraph 
                     text="We also collect information from third party vendors and/or partners and/or other commercially available sources such as data aggregators and public databases , who provide us data to supplement the information we collect about you, in accordance with applicable laws. For example, we may receive fraud warnings from service providers for our fraud prevention and risk assessment efforts.
                     "/>
                      <Paragraph 
                     text="If you link, connect, or login to your Fiverr Account with a third-party service (e.g. Google, Facebook, LinkedIn), we receive certain information, such as your registration and profile information from that service. This information varies and is controlled by that service or as authorized by you via your privacy settings at that service.
                     " />
                     <Paragraph 
                     text="We also receive certain information about you, if you are invited to Fiverr by another user (for example, as part of our collaboration tools and referral program), in such case we will receive limited information, such as your email address or other contact information, and we will use it for the same purpose it was provided and in accordance with the terms of this Privacy Policy.
                     " />
                </Accordion>

                <Accordion title="Do Not Track" href="#ac3" class="course-list-items acd-items acd-arrow">
                     <Paragraph 
                     text="Do Not Track (DNT) is a privacy preference that users can set in some web browsers, allowing users to opt out of tracking by websites and online services. We do not honor browser requests not to be tracked online (known as “Do Not Track”), but our cookie policy below describes how you can opt out of receiving cookies.
                         "
                        />
                </Accordion>

                <Accordion
                        title="How do we use the Information collected?"
                        href="#ac4"
                        class="course-list-items acd-items acd-arrow"
                        >
                         <Paragraph 
                         text="Where relevant under applicable laws, all processing of your personal information will be justified by a condition for processing. In the majority of cases, processing will be justified on the basis that:
                         "/>
                    <ul>
                        <DoubleCheck text="you have provided your consent for us to use your personal information for a specific purpose;"/>
                        <DoubleCheck text="our use of your personal information is necessary to perform a contract or take steps to enter into a contract with you (e.g. to provide you with services which you have purchased);"/>
                        <DoubleCheck text="the processing is necessary to comply with a relevant legal obligation or regulatory obligation that we have (e.g. fraud prevention); or"/>
                        <DoubleCheck text="the processing is necessary to support our legitimate interests as a business (e.g. to improve our services to you), subject to your interests and fundamental rights and provided it is conducted at all times in a way that is proportionate."/>
                    </ul>
                </Accordion>
                </div>
            </div>
        );
    }
}

export default LongVersion;