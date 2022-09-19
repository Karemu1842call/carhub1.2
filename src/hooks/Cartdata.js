import React from 'react'
import { useEffect, useState } from "react"
import Cart from '../components/Cart';
export default function Cartdata() {
    const [cartitem, setCartitem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/carts")
          .then((r) => r.json())
          .then((data) => setCartitem(data));
      }, []);


      const Simplify = cartitem.map((items)=>(
        <Cart
        id={items.id}
        type={items.car_type}
        customer_name ={items.customer_name}
        address={items.address}
        price={items.price}  
        />
      
      )
      )
  return (
    <>


{Simplify}


</>
  )
}
