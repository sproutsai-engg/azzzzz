// import logo from './logo.svg';
import './App.css'
import React, { useState, useEffect } from 'react'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Header from './Components/Header'
import '@aws-amplify/ui-react/styles.css'
import { listUsers } from './graphql/queries'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  

// // import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// //import App from './App';
// import reportWebVitals from './reportWebVitals'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"




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

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello</h1>
      {/* <Router>
        {/* <Switch> */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Redirect to="/" />  */}
        {/* </Switch> */}
      {/* </Router>
      <button onClick={}> UserDetailsPage </button> */} */}
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(App)

// async function signUp() {
//     try {
//         const { user } = await Auth.signUp({
//             email,
//             password,

//         });
//         console.log(user);
//     } catch (error) {
//         console.log('error signing up:', error);
//     }
// }

// function App() {
//   // const [users, setUsers] = useState("")

//   return (
//     <Authenticator className="authenticator" signUpAttributes={['email']}>
//       {({ signOut, user }) => (
//         <>
//           <Header mail={user.attributes.email} singout={signOut} />
//         </>
//       )}
//     </Authenticator>
//   )
// }

// export default App
