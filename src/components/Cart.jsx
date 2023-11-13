import React from 'react'
import {useCart} from 'react-use-cart'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    emptyCart,
    
    updateItemQuantity,
    removeItem,
  } = useCart();
  if (isEmpty) return <p className='text-center'>Your cart is empty</p>;
      
  return (
    <div>
    
    <table class="table m-5">
  
  <tbody>
  {items.map(itemproduct=>{
    
   return(
    <tr>
      <th scope="row"></th>
      
      <td><img src={itemproduct.image} style={{width: '10rem' }} /></td>
      <td><p>{itemproduct.name}</p></td>
      <td><p>{itemproduct.price}</p></td>
      <td><p>Item Quantity:({itemproduct.quantity})</p></td>
      <td><button  onClick={() => updateItemQuantity(itemproduct.id, itemproduct.quantity - 1)}>-</button>
      <button onClick={() => updateItemQuantity(itemproduct.id, itemproduct.quantity + 1)}>+</button>
      <button onClick={() => removeItem(itemproduct.id)}>remove</button></td>
    </tr>
   )

  })}
    
   
  </tbody>
</table>


<>
<h5>Total:{cartTotal}</h5>
<button className='btn btn-danger p-2' onClick={()=>{emptyCart()}}>Clear Cart</button>
</>
<></>


    
    </div>
  )
}

export default Cart