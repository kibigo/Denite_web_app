import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Admin from './Components/Admin/Admin';
import Team from './Components/Admin/Team';
import Products from './Components/Admin/Products';
import Report from './Components/Admin/Report';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/admin/team' element={<Team />}/>
          <Route path='/admin/products' element={<Products />}/>
          <Route path='/admin/report' element={<Report />}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
