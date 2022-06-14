// import logo from './logo.svg';
import './App.css'
import React, { useState, useEffect } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import Header from './Components/Header'
import '@aws-amplify/ui-react/styles.css'
import { listUsers } from './graphql/queries'

Amplify.configure(awsconfig)

//const [users, setUsers] = useState([])
//   useEffect(() => {
//     fetchUsers()
//   }, [])

// const FetchUsers = async () => {
//   const [users, setUsers] = useState('')
//   useEffect(() => {
//     FetchUsers()
//   }, [])
//   try {
//     const userData = await API.graphql(graphqlOperation(listUsers))
//     const userList = userData.data.listUsers.items
//     console.log('user list', userList)
//     setUsers(userList)
//     //
//   } catch (error) {
//     console.log('error on fetching users', error)
//   }
// }

function App() {
  // const [users, setUsers] = useState("")

  return (
    <Authenticator className="authenticator" signUpAttributes={['email']}>
      {({ signOut, user }) => (
        <>
          <Header mail={user.attributes.email} singout={signOut} />
        </>
      )}
    </Authenticator>
  )
}

export default App
