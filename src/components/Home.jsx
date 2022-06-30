import React from 'react'

import { auth } from '../service/firebase'
import '../App.css';

function Home({user}) {
  console.log(user);  
  return (
    <div className="home">
    <h1>Hello, <span></span>{user.displayName}</h1>
    <h2>{user.email}</h2>
    <h2>{user.uid}</h2>
    
    <img src={user.photoURL} alt="" />
    <p></p>
    <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
  </div>
    
  )
}

export default Home