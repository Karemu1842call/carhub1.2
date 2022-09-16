import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Customerdata() {
  return (
    <div id='custom_data'>
     <div>
     <h1>CUSTOMER DETAILS</h1>
      <li>please fill in the data below for your order to be a success.</li>
       <li> If you submit a order without filling the form it will be considered as null
      </li>
     </div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Customer Name</Form.Label>
    <Form.Control type="Name" placeholder="Name" />
    <Form.Text className="text-muted">
      This data will specifically used by the car dealer.
          </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Customer Address</Form.Label>
    <Form.Control type="Address" placeholder="Address...." />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}
