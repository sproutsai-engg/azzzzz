import './Profile.css'
import Form from './Form.js';
// import React from 'react'
import React, { useState, useEffect } from 'react'
import { listUsers } from './graphql/queries'
import { Amplify, API, graphqlOperation } from 'aws-amplify'

export default function Profile() {
  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  // const [users, setUsers] = useState([])

  // const fetchUsers = async () => {
  //   try {
  //     const userData = await API.graphql(graphqlOperation(listUsers))
  //     const userList = userData.data.listUsers.items
  //     console.log('User list====>>>>', userList)
  //     setUsers(userList)
  //   } catch (error) {
  //     console.log('error on fetching users', error)
  //   }
  // }

  return (
    <div>
      <h1>Welcome to the Profile Page</h1>
      <h2>Create your Profile here</h2>
      <Form />
    </div>
  )
}
