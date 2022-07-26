import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Presentation from "./components/presentation/Presentation";
import Reval from "./components/Reval";
import Text from "./components/richTextEditor/RichTextEditor";
//import GoogleLogin from "./components/GoogleLogin";
//import './service/firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //console.log(user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reval/:id" element={<Reval/>}  />
          <Route path="/presentation/">
            <Route path=":id" element={<Presentation />} />
          </Route>
          <Route path="/text" element={<Text/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
