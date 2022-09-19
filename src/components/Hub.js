import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Hub({id,power,image,type,year,price}) {
    // console.log(id)
    // console.log(year)
    return (
      <div id='hub'>
        <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Cars</Card.Title>
        <p>Add item to cart to buy.</p>
        <Card.Text>
          <ul>
            <li>Car name:{type}</li>
            <li>Car horsepower:{power}</li>
            <li>Car model year:{year}</li>
            <li>Car price:${price}</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
      </div>
  )
}
