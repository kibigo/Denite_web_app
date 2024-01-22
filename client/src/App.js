import './App.css';
import { Navbar } from './Components/Homepage/Navbar';
import Footer from './Components/Homepage/Footer';
import AppRoutes from './AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const navigate = useNavigate()

  const excludePaths = ['/', '/login', '/admin', '/admin/team', '/admin/products', '/admin/report']

  const shouldDisplayNavbarFooter = !excludePaths.includes(window.location.pathname)

  const [cart, setCart] = useState([])

  const handleAddToCart = (newproduct) => {
    const existingProduct = cart.find((item) => item.product.id == newproduct.id)

    if (existingProduct){
      const latestProduct = cart.map((item) => 
      item.product.id == newproduct.id ? {
        ...item, quantity: item.quantity + 1} : item
        )
        setCart(latestProduct)
    }
    else{
      setCart([...cart, {product: newproduct, quantity: 1}])
    }
  }

  return (
    <div className="App">
      {shouldDisplayNavbarFooter && (
        <div>
          <Navbar cart={cart}/>
        </div>
      )}
      <div className='main-content'>
        <AppRoutes handleAddToCart={handleAddToCart} cart={cart} setCart={setCart}/>
      </div>
      {shouldDisplayNavbarFooter && <Footer />}
    </div>
  );
}

export default App;