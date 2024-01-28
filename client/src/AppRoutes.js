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
import FruitsVegetablesPage from './Components/Homepage/FruitsVegetablesPage';
import ColdDrinksPage from './Components/Homepage/ColdDrinksPage';
import SnacksMunchiesPage from './Components/Homepage/SnacksMunchies';
import AllCategoriesPage from './Components/Homepage/AllCategories';
import Mpesa from './Components/Homepage/Mpesa';

function AppRoutes({customer, setCustomer, handleAddToCart, totalAmount, removeFromCart, cart, setCart}) {

  return (
    <div className="App">
        <Routes>

          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login setCustomer={setCustomer}/>}/>
          <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} />}/>
          <Route path='/top-categories' element={<TopCategoriesPage />}/>
          <Route path='/fruits-and-vegetables' element={<FruitsVegPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cold-drinks-and-juices' element={<DrinksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/snacks-and-munchies' element={<SnacksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/featured-brands' element={<FeaturedBrandsPage />}/>
          <Route path='/all-categories' element={<AllCategoriesPage handleAddToCart={handleAddToCart} />}/>
          <Route path='/all-fruits' element={<FruitsVegetablesPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/all-drinks' element={<ColdDrinksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/all-snacks' element={<SnacksMunchiesPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart customer={customer} cart={cart} setCart={setCart} removeFromCart={removeFromCart} totalAmount={totalAmount}/>}/>
          <Route path='/cart/payment' element={<Mpesa totalAmount={totalAmount}/>}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/admin/team' element={<Team />}/>
          <Route path='/admin/products' element={<Products />}/>
          <Route path='/admin/report' element={<Report />}/>
     

        </Routes>
    </div>
  );
}

export default AppRoutes;
