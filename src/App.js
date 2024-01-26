import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Hero/Hero"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
