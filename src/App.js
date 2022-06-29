import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
//import GoogleLogin from "./components/GoogleLogin";
import firebase from './service/firebase';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
  return (
    <Router>
      <div className="App">
      {user ? <Home user={user} /> : <Login />}
        <Routes>
          {/* <Route path="/" element={<App />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>

  );
  
}    

export default App;
