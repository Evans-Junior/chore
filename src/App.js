import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Hero/Hero"
import './App.css'
import Header from './Components/Header/Header'; 
import LandingPage from './Components/LandingPage/LandingPage'; 
import FileNotFound from './Components/FileNotFound/FileNotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<FileNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
