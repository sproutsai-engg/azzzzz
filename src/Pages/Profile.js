import './Profile.css'
import { useState, useEffect } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createUser, updateUser } from '../graphql/mutations'
import { getUser } from '../graphql/queries'
import { useLocation } from 'react-router-dom'
import S3 from 'react-aws-s3'

window.Buffer = window.Buffer || require('buffer').Buffer

const initialState = {
  profilepic: '',
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  skills: '',
  Role: '',
  experience: '',
  highestLevelOfEducation: '',
  gender: '',
  resume: '',
  dateOfBirth: '2002-02-02',
}

let accountCreated = true

export default function Profile() {
  const location = useLocation()
  const { mail } = location.state
  initialState.email = mail
  const [formState, setFormState] = useState(initialState)
  const [resume, setResume] = useState()
  const [profilePic, setProfilePic] = useState()

  useEffect(() => {
    fetchUser()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  function updateState() {}

  async function onChangeProfile(e) {
    const file = e.target.files[0]
    try {
      await Storage.put(file.name, file, {
        level: 'private',
        contentType: 'image/png', // contentType is optional
      })
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  // const uploadFile = async (file) => {
  //     const ReactS3Client = new S3(config);
  //     // the name of the file uploaded is used to upload it to S3
  //     ReactS3Client
  //         .uploadFile(file, file.name)
  //         .then(data => console.log(data.location))
  //         .catch(err => console.error(err))
  // }

  async function fetchUser() {
    try {
      const userData = await API.graphql(
        graphqlOperation(getUser, { email: initialState.email }),
      )
      const user = userData.data.getUser
      console.log(user)
      if (user === null) {
        accountCreated = false
      } else {
        setFormState({ user })
        updateState()
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function updateUserData() {
    try {
      const temp = await API.graphql(graphqlOperation(updateUser, formState))
      console.log(temp)
    } catch (err) {
      console.log(err)
    }
  }

  async function createUserInstance() {
    console.log(typeof formState.profilepic)
    try {
      const instance = await API.graphql(
        graphqlOperation(createUser, { input: formState }),
      )
      console.log(instance)
    } catch (err) {
      console.log(err)
    }
  }

  const onSave = (event) => {
    event.preventDefault()

    if (accountCreated) {
      updateUserData()
    } else {
      createUserInstance()
      updateUserData()
    }
  }

  return (
    <div className="form-container">
      <div className="image-container">
        <label className="image-label">
          <span>Upload Image:</span>
          <br />
          <input
            className="upload-image"
            type="file"
            name="profilepic"
            required
            // onChange={(event) => {
            //   setProfilePic('profilepic', event.target.files[0])
            // }}
            onChange={onChangeProfile}
          />
        </label>
        <input
          type="submit"
          value="Upload"
          onClick={() => uploadFile(profilePic)}
        />
      </div>

      <div className="resume-container">
        <label>
          <span>Upload Resume:</span>
          <br />
          <input
            className="resume"
            name="resume"
            type="file"
            required
            onChange={(event) => {
              setResume('resume', event.target.files[0])
            }}
          />
        </label>
        <input
          type="submit"
          value="Upload"
          onClick={() => uploadResume(resume)}
        />
      </div>

      <form className="form" onSubmit={onSave}>
        <div className="name">
          <label>
            <span>First Name:</span>
            <br />
            <input
              className="input-first-name"
              name="firstName"
              type="text"
              required
              onChange={(event) => {
                setInput('firstName', event.target.value)
              }}
              value={formState.firstName}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <br />
            <input
              className="input-last-name"
              name="lastName"
              type="text"
              required
              onChange={(event) => {
                setInput('lastName', event.target.value)
              }}
              value={formState.lastName}
            />
          </label>
        </div>
        <label>
          <span>Email:</span>
          <br />
          <input
            className="input-email"
            name="email"
            type="text"
            required
            value={formState.email}
          />
        </label>
        <label>
          <span>Mobile:</span>
          <br />
          <input
            className="mobile"
            name="mobile"
            onChange={(event) => {
              setInput('mobile', event.target.value)
            }}
            value={formState.mobile}
          />
        </label>

        <label>
          <span>Skills:</span>
          <br />
          <input
            className="input-skills"
            name="skills"
            type="text"
            required
            onChange={(event) => {
              setInput('skills', event.target.value)
            }}
            value={formState.skills}
          />
        </label>
        <label>
          <span>Role:</span>
          <br />
          <input
            className="role"
            name="Role"
            onChange={(event) => {
              setInput('Role', event.target.value)
            }}
            value={formState.Role}
          />
        </label>
        <label>
          <span>Experience(in years):</span>
          <br />
          <input
            className="input-ex"
            name="experience"
            type="text"
            required
            onChange={(event) => {
              setInput('experience', event.target.value)
            }}
            value={formState.experience}
          />
        </label>
        <label>
          <span>Education:</span>
          <br />
          <input
            className="input-edu"
            name="highestLevelOfEducation"
            type="text"
            required
            onChange={(event) => {
              setInput('highestLevelOfEducation', event.target.value)
            }}
            value={formState.highestLevelOfEducation}
          />
        </label>
        <label>
          <span>Gender</span>
          <select
            name="gender"
            required
            onChange={(event) => {
              setInput('gender', event.target.value)
            }}
            value={formState.gender}
          >
            <option value="none" selected>
              select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
        </label>

        <input className="save-btn" type="submit" value="Save" />
      </form>
    </div>
  )
}
