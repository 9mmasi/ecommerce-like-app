import React from 'react';
import { useCart } from 'react-use-cart';
import {Link} from 'react-router-dom'


const Navbar = () => {
  const{totalUniqueItems}=useCart()
  return (
    
        
        <nav className="m-5 navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand"><Link to='/'>Ecommerce-like-app</Link></a>
    <div className="d-flex">
    <Link to='/cart'>
    <i className="bi bi-cart">({totalUniqueItems})</i>
    </Link>
      
    </div>
  </div>
</nav>
    
  )
}

export default Navbar