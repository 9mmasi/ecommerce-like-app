import React from 'react'
import {  useCart } from "react-use-cart";


const Product = ({item}) => {
    const { addItem } = useCart();

    const{id,name,price,image}=item
  return (
    
        <div key={id} className="card" style={{width: '18rem' }}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h5 className='card-title'>${price}</h5>
   
    <button onClick={() => addItem(item)}>Add to cart</button>
  </div>
</div>
    
  )
}

export default Product