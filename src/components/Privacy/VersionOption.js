import React, { Component } from 'react';

class VersionOption extends Component {
    render() {
        return (
            <ul className="nav nav-pills">
                <li className="active">
                    <a data-toggle="tab" href="#tab1" aria-expanded="true">
                        The Short Version
                </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#tab2" aria-expanded="false">
                        The Long Version
                </a>
                </li>
            </ul>
        );
    }
}

export default VersionOption;