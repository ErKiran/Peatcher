import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoggedInHeader from './Header/LoggedInHeader';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';

class Wrapper extends Component {
    render() {
        if (this.props.auth.isAuthenticated) {
            return (
                <div>
                    <LoggedInHeader />
                    {this.props.children}
                    <Footer />
                </div>
            );
        } else {
            return (
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Wrapper);
