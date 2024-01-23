import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';
import Login from './Components/Login';
import Admin from './Components/Admin/Admin';
import Team from './Components/Admin/Team';
import Products from './Components/Admin/Products';
import Report from './Components/Admin/Report';
import HomePage from './Components/Homepage/HomePage';
import { TopCategoriesPage } from './Components/Homepage/TopCategoriesPart';
import DrinksPage from './Components/Homepage/CDJHomePage';
import FruitsVegPage from './Components/Homepage/FVHomePage';
import SnacksPage from './Components/Homepage/SCHomePage';
import FeaturedBrandsPage from './Components/Homepage/FeaturedBrandsPage';
import { useState } from 'react';
import Cart from './Components/Homepage/Cart';
import { Navbar } from './Components/Homepage/Navbar';



function AppRoutes({handleAddToCart, totalAmount, removeFromCart, cart, setCart}) {

  return (
    <div className="App">
        <Routes>

          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} />}/>
          <Route path='/top-categories' element={<TopCategoriesPage />}/>
          <Route path='/fruits-and-vegetables' element={<FruitsVegPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cold-drinks-and-juices' element={<DrinksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/snacks-and-munchies' element={<SnacksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/featured-brands' element={<FeaturedBrandsPage />}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} totalAmount={totalAmount}/>}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/admin/team' element={<Team />}/>
          <Route path='/admin/products' element={<Products />}/>
          <Route path='/admin/report' element={<Report />}/>
     

        </Routes>
    </div>
  );
}

export default AppRoutes;
