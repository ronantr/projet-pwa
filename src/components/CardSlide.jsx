import React from 'react'
import { Card } from 'react-bootstrap'

function CardSlide({item,setSlide}) {
  const handleClick = () => {
    setSlide(item)
  }
  return (
    <Card style={{ width: '12em' }}>
  <Card.Img variant="top" src="https://via.placeholder.com/150" onClick={handleClick} />
</Card>
  )
}

export default CardSlide