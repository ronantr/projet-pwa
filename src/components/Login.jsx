import React from 'react'
import { signInWithGoogle } from '../service/firebase';
import '../App.css';


function Login() {
  return (
    <>
    <div>Login
          <div>
      <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
    </div>
    </>
  )
}

export default Login