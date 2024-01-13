import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
