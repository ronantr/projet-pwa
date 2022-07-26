import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardPresentation({title,url,link}) {
  return (
    <Card style={{ width: '18rem' ,margin:'auto'}}>
  <Card.Img variant="top" src="https://via.placeholder.com/200" />
  <Card.Body>
    <Card.Title>{title}{!title && 'Not Title'}</Card.Title>
    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <Button variant='primary'>
        <Link to={url} style= {{ color: "white", textDecoration:'none' }}>View</Link>
      </Button>
      <Button variant='primary'>
        <Link to={link} style={{marginLeft:"5px" ,color: "white", textDecoration:'none'}}>Show</Link>
      </Button>
    </div>
  </Card.Body>
</Card>
  )
}

export default CardPresentation