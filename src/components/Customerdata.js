import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState } from "react"
export default function Customerdata() {
  const [ Name, setName ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ tel_no, setTel_no ] = useState('')





  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name:Name,
        address:address,
        tel_no:tel_no   
      })
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      setName('')
      setAddress('')
      setTel_no('')
    })
    .catch(err => err.message)

    document.querySelector('form').reset()
  }
  return (
    <div id='custom_data'>
     <div>
     <h1>CUSTOMER DETAILS</h1>
      <li>please fill in the data below for your order to be a success.</li>
       <li> If you submit a order without filling the form it will be considered as null
      </li>
     </div>
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail"onChange={(e) => setName(e.target.value)}value={Name}>
    <Form.Label> Name</Form.Label>
    <Form.Control type="Name" placeholder="Name" />
    <Form.Text className="text-muted">
Please enter your name!          </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" value={address} onChange={(e) => setAddress(e.target.value)}>
    <Form.Label> Address</Form.Label>
    <Form.Control type="Address" placeholder="Address...." />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword"value={tel_no} onChange={(e) => setTel_no(e.target.value)}>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel_no" placeholder="Phone Number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept terms and conditions of this app as stipulated on companies copyrights 2022" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}
