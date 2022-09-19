import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Cart
({id,type,address,price,customer_name}) {
  
  return (
    <div id='cart' className='mrengavroom'>
      <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>customer name</th>
          <th>Car type</th>
          <th>customer address</th>
          <th>price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{customer_name}</td>
          <td>{type}</td>
          <td>{address}</td>
          <td>{price}</td>
          <td ><button>Delete</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
