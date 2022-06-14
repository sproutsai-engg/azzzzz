// import logo from './logo.svg';
import './App.css'
import Profile from './Pages/Profile'
import React, { useState, useEffect } from 'react'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import Header from './Components/Header'
import '@aws-amplify/ui-react/styles.css'
import { listUsers } from './graphql/queries'
import {Routes, Route, useNavigate} from 'react-router-dom';
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
 
export default function App() {

  return (
    <Authenticator className='authenticator' signUpAttributes={['email']}>
      {({ signOut, user }) => (
        <>
          <Header mail={user.attributes.email} singout={signOut} />
        </>
      )}
    </Authenticator>
  );
}


// function App({ signOut, user }) {
//    const navigate = useNavigate();

//   return (
//     <>
//       <h1>Hello {user.username}</h1>
//       {/* <button onClick={navigateToProfile}>Profile</button> */}
    
//       <button onClick={signOut}>Sign out</button>
//       {/* <Routes>
//           {/* <Route path="/contacts" element={<Contacts />} /> */}
//           {/* <Route path="/Pages/Profile" element={<Profile />} />
//         </Routes> */}

//     </>
//   );
// }

// export default withAuthenticator(App);

// const navigateToProfile = () => {
//   navigateToProfile('Profile');
// };





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
