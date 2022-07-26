import React, { useEffect, useState } from 'react'
import Presentation from './presentation/Presentation'
import { auth } from '../service/firebase'
import '../App.css';
// import {Firebase} from '../service/firebase'
import {db} from '../service/firebase'
import {addPresentation,getPresentations} from '../service/dbHelpers'
import { Col, Container, Row } from 'react-bootstrap';
import CardPresentation from './CardPresentation';



function Home({user}) {
    const [inputTitle, setInputTitle] = useState('');
    const [presentations, setPresentations] = useState([{}])
    // const[test, setTest] = useState([{}])
    const [showForm, setShowForm] = useState(false)
    const handleAddPresentation = () => {
    setShowForm(true)
                }

    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value)
    }

    const handleSubmitAddPresentation = async () => {
        // setPresentations(...presentations,{
        //     title: inputTitle,
        //     author: {
        //         name: user.displayName,
        //         email: user.email,
        //     },
        //     editor: [
        //         {}
        //     ],
        //   })
        addPresentation(
            {
                title: inputTitle,
                author: {
                    name: user.displayName,
                    email: user.email,
                },
                editor: [
                    {}
                ],
            }
        )
        setShowForm(false)
    }
      
useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      let data =await getPresentations()
      setPresentations(data)
    };
  
    fetchData()

// firebase.database().ref().on("value", snapshot => {
// let fetchData= [];
// fetchData.push(snapshot.val());
// setData({fetchData});
// });


  }, [])

  return (
      <>
      <link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css"/>
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css"/>
       <h1>Hello, <span></span>{user.displayName}</h1>
    <h2>{user.email}</h2>
    <h2>{user.uid}</h2>
    
    <img src={user.photoURL} alt="" />
    <p></p>
    <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>


    <div>
        <button onClick={handleAddPresentation}>Add new Presentation</button>
        {showForm ? <> <input type="text" onChange={handleChangeTitle}/> <button onClick={handleSubmitAddPresentation}>Add</button></> : null}
    </div>
    <Container>
  <Row>
  {
        (presentations.length > 0) ?
        presentations.map((presentation,index) => 
        <Col sm={3} key={index}>
            <CardPresentation title={presentation.title} url={`/presentation/${presentation.title}`} link={`/reval/${presentation.title}`}/>
        </Col>
        ) :""
        }
  </Row>
</Container>
      <div>
        <h5>Database :</h5>
        {presentations.map((presentation,index) => <div key={index}><h6>{presentation.title}</h6></div>)}
      </div>
    
      </>

  )
}

export default Home