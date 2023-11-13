import React from 'react'
import {data}  from './data.js'
import Product from './Product.jsx'

const Products = () => {
  return (
    <div className="container">
    <h1 className='text-center'>Product List</h1>
     <div className="row">
{data.map(item=>{
    return(
       
        <div className="m-4 col-xl">

        <Product key={item.id} item={item} />
        </div>
      
       
    )
})}
</div>
    </div>
  )
}

export default Products