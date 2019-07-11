import React, { Component } from 'react';
import Main from './Main';

class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Main history={this.props.history} />
            </div>
        );
    }
}

export default Login;