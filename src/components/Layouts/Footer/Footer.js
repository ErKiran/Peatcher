import React, { Component } from 'react';
import FooterMain from './FooterMain';
import FooterButton from './FooterButton';

class Footer extends Component {
    render() {
        return (
            <>
                <footer class="bg-dark default-padding-top text-light">
                    <FooterMain />
                    <FooterButton />
                </footer>
            </>
        );
    }
}

export default Footer;