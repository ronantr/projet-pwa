import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { addSlide } from '../service/dbHelpers'
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

const slides =[{
  title: 'Slide 1',
  content:'',
},
{
  title: 'Slide 2',
  content:'',
},
{
  title: 'Slide 3',
  content:'',
},
{
  title: 'Slide 4',
  content:'',

},
{
  title: 'Slide 5',
  content:'',
},
{
  title: 'Slide 6',
  content:'',
},
{
  title: 'Slide 7',
  content:'',
},
{
  title: 'Slide 8',
  content:'',
},
{
  title: 'Slide 9',
  content:'',
},
{
  title: 'Slide 10',
  content:'',
},

]
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
function Presentation({title}) {
  const [slide, setSlide] = useState(slides[0]);
  return (
  <Container fluid >

    <Row style={classes.container}>
      <Col sm={2} style={classes.slideList}>
      {
          slides.map(item => <CardSlide key={item} item={item} setSlide={setSlide}/>)
        }
      </Col>
      <Col sm={10}>
       <Slide item={slide} />
      </Col>
    </Row>
  </Container>
  )
}

export default Presentation