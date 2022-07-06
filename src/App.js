import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Presentation from "./components/Presentation";
//import GoogleLogin from "./components/GoogleLogin";
//import './service/firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  console.log(user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/presentation/">
            <Route path=":id" element={<Presentation />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
