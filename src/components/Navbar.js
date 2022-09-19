import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function Navbar(props) {
  return (
   <div id='navbar' className='navbar'>
     <Card>
    <Card.Header>
      <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#hub">Hub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#custom_data">Customer details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#dealer">Dealer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  </Card>
   </div>
  )
}
