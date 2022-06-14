import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            Role: "",
            highestLevelOfEducation: "",
            dateOfBirth: "",
            mobile: "",
            gender: "",
            experience: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const inputValue = event.target.value;
        const stateField = event.target.name;
        this.setState({
            [stateField]: inputValue,
        });
        console.log(this.state);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { name, message } = this.state;
        await axios.post(
            'https://i1xsjzkri4.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction',
            { key1: `${name}, ${message}` }
        );
    }

    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>

                    <label>
                        FirstName:
                        <input type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                        />
                    </label>

                    <label>
                        LastName:
                        <input type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                        />
                    </label>

                    <label>
                        Role:
                        <input type="text"
                            name="Role"
                            onChange={this.handleChange}
                            value={this.state.Role}
                        />
                    </label>

                    <label>
                        Highest Level Of Education:
                        <input type="text"
                            name="highestLevelOfEducation"
                            onChange={this.handleChange}
                            value={this.state.highestLevelOfEducation}
                        />
                    </label>

                    <label>
                        Date Of Birth:
                        <input type="date"
                            name="dateOfBirth"
                            onChange={this.handleChange}
                            value={this.state.dateOfBirth}
                        />
                    </label>


                    <label>
                        Mobile:
                        <input type="tel"
                            name="mobile"
                            onChange={this.handleChange}
                            value={this.state.mobile}
                        />
                    </label>

                    <label>
                        Select you gender:
                        <select name="gender">
                            <option value="none" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>
                    </label>


                    <label>
                        Experience:
                        <input type="text"
                            name="experience"
                            onChange={this.handleChange}
                            value={this.state.experience}
                        />
                    </label>

                </form>
            </div>
        );
    }
}