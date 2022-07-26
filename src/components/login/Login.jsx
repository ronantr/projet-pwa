import React from 'react'
import { signInWithGoogle } from '../../service/firebase';
import './login.css';


function Login() {
  return (
    <>
    {/* <div>Login
          <div>
      <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
    </div> */}
    <body className='login'>
      <div className="Auth-form-container">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Se connecter</h3>
            <div className="form-group mt-3">
              <label>Connectez-vous</label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
            </div>
          </div>
      </div>
    </body>
    </>
  )
}

export default Login