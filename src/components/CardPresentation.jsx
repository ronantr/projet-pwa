import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardPresentation({title,url}) {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://via.placeholder.com/200" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Link to={url}>View</Link>
  </Card.Body>
</Card>
  )
}

export default CardPresentation