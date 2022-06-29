import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  /*var quill1 = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });
  var quill2 = new Quill('#editor-container1', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });
  
  var quill3 = new Quill('#editor-container2', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });

*/
  const [text, setText] = useState();

  const handleclick = (e) =>{

console.log("tefegefegg",e)
    setText(e.target.value)
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<App />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>

  );
  
}    
/*<div id="editor-container">
</div>

<div id="editor-container1">
</div>

<div id="editor-container2">
</div>*/

export default App;
