import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CardSlide from './CardSlide'
import Slide from './Slide'

const slides =[{
  title: 'Slide 1',
},
{
  title: 'Slide 2',
},
{
  title: 'Slide 3',
},
{
  title: 'Slide 4',
},
{
  title: 'Slide 5',
},
{
  title: 'Slide 6',
},
{
  title: 'Slide 7',
},
{
  title: 'Slide 8',
},
{
  title: 'Slide 9',
},
{
  title: 'Slide 10',
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