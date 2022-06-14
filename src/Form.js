import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //   name: '',
      //   message: '',
      ID: '',
      firstName: '',
      lastName: '',
      Role: '',
      highestLevelOfEducation: '',
      dateOfBirth: '',
      email: '',
      mobile: '',
      gender: '',
      experience: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const inputValue = event.target.value
    const stateField = event.target.name
    this.setState({
      [stateField]: inputValue,
    })
    console.log(this.state)
  }
  async handleSubmit(event) {
    event.preventDefault()
    const {
      ID,
      firstName,
      lastName,
      Role,
      highestLevelOfEducation,
      dateOfBirth,
      email,
      mobile,
      gender,
      experience,
    } = this.state
    await axios.post(
      'https://nr4z67jjvi.execute-api.us-east-2.amazonaws.com/default/SampleUploadingDataIntoDynamoFunction',
      {
        key1: `${firstName}, ${lastName}, ${Role}, ${highestLevelOfEducation}, ${dateOfBirth}, ${email},${mobile}, ${gender}, ${experience}`,
      },
    )
  }

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <label>ID:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />

          {/* <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <br /> */}

          <label>
            FirstName:
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </label>
          <br />

          <label>
            LastName:
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </label>
          <br />

          <label>
            Role:
            <input
              type="text"
              name="Role"
              onChange={this.handleChange}
              value={this.state.Role}
            />
          </label>
          <br />

          <label>
            Highest Level Of Education:
            <input
              type="text"
              name="highestLevelOfEducation"
              onChange={this.handleChange}
              value={this.state.highestLevelOfEducation}
            />
          </label>
          <br />

          <label>
            Date Of Birth:
            <input
              type="date"
              name="dateOfBirth"
              onChange={this.handleChange}
              value={this.state.dateOfBirth}
            />
          </label>
          <br />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <br />

          <label>
            Mobile:
            <input
              type="tel"
              name="mobile"
              onChange={this.handleChange}
              value={this.state.mobile}
            />
          </label>
          <br />

          <label>
            Select you gender:
            <select name="gender">
              <option value="none" selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </label>
          <br />

          <label>
            Experience:
            <input
              type="text"
              name="experience"
              onChange={this.handleChange}
              value={this.state.experience}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
