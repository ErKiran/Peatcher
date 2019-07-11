import React, { Component } from 'react';

class Panels extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#ac1">
                            Do I need a business plan?
                            </a>
                    </h4>
                </div>
                <div id="ac1" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <p>
                            She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down.For request general express unknown are. Esteems it ye sending reached as. Longer lively her design settle tastes advice
                                </p>
                        <p>
                            Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially
                                 </p>
                        <ul>
                            <li>Full her ten open fond walk not down</li>
                            <li>General express unknown are</li>
                            <li>Impossible considered invitation him men instrument</li>
                            <li>Admiration mrs unreserved discovered </li>
                            <li>wholly fat who window extent either formal</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Panels;