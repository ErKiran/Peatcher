import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        return (
            <p style={{ textAlign: 'justify' }}>{this.props.text}</p>
        );
    }
}

export default Paragraph;