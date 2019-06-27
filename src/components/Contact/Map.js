import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <div className="col-md-6 maps">
                <h3>Our Location</h3>
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>
                </div>
            </div>
        );
    }
}

export default Map;