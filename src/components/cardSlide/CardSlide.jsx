import React from 'react'
import { Card } from 'react-bootstrap'
import './cardSlide.css'

function CardSlide({item,setSlide}) {
  const handleClick = () => {
    setSlide(item)
  }
  return (
//     <Card class="cardSlide">
//   <Card.Img variant="top" src="https://via.placeholder.com/150" onClick={handleClick} />

// </Card>
<div className="card" onClick={handleClick}>
  <Card className="cardSlide">
    {item.title}
  </Card>
</div>
  )
}

export default CardSlide