import React, { Component } from 'react';

class Accordion extends Component {
    render() {
        const id = (this.props.href).substr(1, (this.props.href).length);
        return (
            <div className={this.props.class}>
                <div className="panel-group symb" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href={this.props.href}>
                                    {this.props.title}
                                </a>
                            </h4>
                        </div>
                        <div id={id} className="panel-collapse collapse">
                            <div className="panel-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;