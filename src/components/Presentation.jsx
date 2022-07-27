import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { addSlide, getAllSlides, getPresentation } from '../service/dbHelpers'
import CardSlide from './CardSlide'
import Slide from './Slide'

/*const handleSubmitAddSlide = async () => {
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
  addSlide(
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
}*/


const classes = {
    container: {
      overflow: 'hidden',
      height:'100%'
    },
    slideList: {
      maxHeight: '100vh',
      overflowY: 'scroll',
    },
  }

 // <div>
 // <button onClick={handleAddSlide}>Add new Slide</button>
 // {showForm ? <> <input type="text" onChange={handleChangeConent}/> <button onClick={handleSubmitAddSlide}>Add</button></> : null}
//</div>
function Presentation() {

  const [isLoading, setIsLoading] = useState(true)
  const titlePresentation= useParams().id
  const [slides, setSlides] = useState();
  const [currentSlide, setCurrentSlide] = useState(null);
  const [idPresentation, setIdPresentation] = useState(null);




  useEffect(() => {

    const getIdPresentation = async (title) => {
      let data =await getPresentation(title);
      data.map(item => {
        setIdPresentation(item.id)
        console.log(item.id)
      })
    } 
    setIsLoading(true)
    getIdPresentation(titlePresentation)
    setIsLoading(false)
  
  }, [])

  useEffect(() => {
    const getSlides = async (idPresentation) => {
      console.log(idPresentation)
      let data =await getAllSlides(idPresentation);
      setSlides(data)
      setCurrentSlide(data[0])
      console.log(data[0])
    };
    setIsLoading(true)
    if(idPresentation) {
      getSlides(idPresentation)
    }
    setIsLoading(false)
  
  }, [idPresentation])


  const handleAddSlide = async () => {
    const data ={
      idPresentation: idPresentation,
      editor: "editor@test.com"
    }
    await addSlide(data);
  }


  return (
  <Container fluid >
    {!isLoading && slides && currentSlide &&
    <Row style={classes.container} className="slides-list">
      <Col sm={2} style={classes.slideList}>
        <button class="add" onClick={handleAddSlide}>Ajouter</button>
      {
          slides.map(item => <CardSlide key={item.id} item={item} setSlide={setCurrentSlide} />)
        }
      </Col>
      <Col sm={10}>
       <Slide item={currentSlide} presentationId={idPresentation} />
      </Col>
    </Row>
}
  </Container>
  )
}

export default Presentation