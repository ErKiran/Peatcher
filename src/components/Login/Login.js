import React, { Component } from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import Main from './Main';

class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <Main history={this.props.history} />
                <Footer />
            </div>
        );
    }
}

export default Login;