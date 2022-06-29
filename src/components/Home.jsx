import React, { useState } from 'react'
import Presentation from './Presentation'
import { auth } from '../service/firebase'
import '../App.css';
function Home({user}) {
    const [inputTitle, setInputTitle] = useState('');
    const [presentations, setPresentations] = useState([])
    const [showForm, setShowForm] = useState(false)
    const handleAddPresentation = (e) => {
    setShowForm(true)
                }

    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value)
    }

    const handleSubmitAddPresentation = () => {
        setPresentations([...presentations,inputTitle]
    )

            setShowForm(false)
    }
        
  return (
      <>
       <h1>Hello, <span></span>{user.displayName}</h1>
    <h2>{user.email}</h2>
    <h2>{user.uid}</h2>
    
    <img src={user.photoURL} alt="" />
    <p></p>
    <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>

    <div>
        <button onClick={handleAddPresentation}>Add new Presentation</button>

        {showForm ? <> <input type="text" onChange={handleChangeTitle}/> <button onClick={handleSubmitAddPresentation}>Add</button></> : null}

        {
        (presentations.length > 0) ?

        presentations.map((presentation,index) => 
        <Presentation key={index} title={presentation} />
        ) :""
        }
    </div>
      
    
      </>

  )
}

export default Home