// import React from 'react'
// import { useEffect, useState } from "react"
// import Cart from '../components/Cart';
// export default function Deletecart() {
//     const [cartitems, setCartitems] = useState([]);
//     // useEffect(() => {
//     // fetch(`http://localhost:9292/carts/${id}`,{
//     //     method: "DELETE",
//     // })
//     // .then(r => r.json())
//     // .then(() => {
//     //     const goThru = cartitems.filter((cartitem) =>cartitem.id !== id)
//     //     setCartitems(goThru)
//     //     })
//     // }
//     useEffect(() => {
//         fetch("http://localhost:9292/carts")
//           .then((r) => r.json())
//           .then((data) => setCartitems(data));
//       }, []);



//     function handleDelete(e){
//         e.preventDefault()
//         fetch(`http://localhost:9292/carts/${id}`, {
//           method: "DELETE",
//         })
//         .then(r => r.json())
//         .then(() => {
//             const goThru = cartitems.filter((item) => item.id !== id)
//                 setCartitems(goThru)
//             })
//     }
//     return(
//         <Cart handleDelete={handleDelete} />
//     )
// }
