import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Admin from './Components/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/admin' element={<Admin />}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
