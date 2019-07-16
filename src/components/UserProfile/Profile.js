import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countries } from 'countries-list';
import TextFieldGroup from '../Common/TextFieldGroup';
import { create_userprofile } from '../../actions/user_profile';
import TestDropdown from '../Common/TestDropdown';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            sex: '',
            country: '',
            dob: '',
            phone_number: '',
            image: '',
            errors: {}
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: this.state.name,
            sex: this.state.sex,
            country: this.state.country,
            dob: this.state.dob,
            phone_number: this.state.phone_number,
            image: this.state.image
        };
        this.props.create_userprofile(userData);
        console.log(userData)
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        console.log(typeof Object.values(countries).map)
        const options = [
            { label: '* Select Interest', value: 0 },
            { label: 'Science', value: 'Science' },
            { label: 'Mathematics', value: 'Mathematics' },
            { label: 'Languages', value: 'Languages' },
            { label: 'Literature', value: 'Literature' },
            { label: 'Quiz', value: 'Quiz' },
            { label: 'Sports', value: 'Sports' },
            { label: 'Computer Technology', value: 'Computer Technology' },
            { label: 'Other', value: 'Other' }
        ];
        return (
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <form onSubmit={this.onSubmit} id="register-form" className="white-popup-block">
                                <div className="col-md-8 login-custom">
                                    <h4>Add Details about your Profile</h4>
                                    <TextFieldGroup
                                        placeholder="Name"
                                        name="name"
                                        type="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    <TextFieldGroup
                                        placeholder="Sex"
                                        name="sex"
                                        type="text"
                                        value={this.state.sex}
                                        onChange={this.onChange}
                                    />
                                    <TextFieldGroup
                                        placeholder="Country*"
                                        name="country"
                                        type="text"
                                        value={this.state.country}
                                        onChange={this.onChange}
                                    />
                                    <TextFieldGroup
                                        placeholder="Date of Birth*"
                                        name="dob"
                                        type="date"
                                        value={this.state.dob}
                                        onChange={this.onChange}
                                    />
                                    <TextFieldGroup
                                        placeholder="Phone Number*"
                                        name="phone_number"
                                        type="number"
                                        value={this.state.phone_number}
                                        onChange={this.onChange}
                                    />
                                    <TextFieldGroup
                                        placeholder="Image*"
                                        name="image"
                                        type="text"
                                        value={this.state.image}
                                        onChange={this.onChange}
                                    />
                                    <TestDropdown
                                        placeholder="Interest"
                                        name="interest"
                                        value={this.state.interest}
                                        onChange={this.onChange}
                                        options={options}
                                        info="Give us an idea of where your interest Lies"
                                    />
                                    <button type="submit">
                                        Add Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { create_userprofile })(Profile);
