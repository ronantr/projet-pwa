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
        <Link className='btn btn-info' to={url} style= {{ color: "white", textDecoration:'none' }}>Edit</Link>
        <Link className='btn btn-success' to={link} style={{marginLeft:"5px" ,color: "white", textDecoration:'none'}}>Show</Link>
    </div>
  </Card.Body>
</Card>
  )
}

export default CardPresentation