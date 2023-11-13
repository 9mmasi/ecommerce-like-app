
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from './components/Products';
import Navbar from './components/Navbar';
import {CartProvider} from 'react-use-cart'
import {Route,Routes} from 'react-router-dom'
import Cart from "./components/Cart";

function App() {


  return (
    <>
      
    <CartProvider>
    <div className="container-fluid">
    <Navbar />
    </div>
    
    <div className="container  ">
    

    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>

    </Routes>
    </div>
    
    
    </CartProvider>    
       
   
    </>
    
  )
}

export default App
