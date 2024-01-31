import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from "./Pages/SignUp/SignUp";
import LandingPage from "./Pages/Hero/Hero"
import './App.css'
import Header from './Components/Header/Header';
import Home from './Pages/LandingPage/LandingPage';
import FileNotFound from './Pages/FileNotFound/FileNotFound';
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage';
import LeadersBoard from './Pages/LeadersBoard/LeadersBoard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  const handleLogin = () => {
    // Your logic for successful login
    if ( window.location.pathname.includes("user")===false) {
      setIsLoggedIn(!isLoggedIn);    
    }
  };

  useEffect(()=>{
    handleLogin()
  },[])

  useEffect(() => {
    const pathIncludesAdmin = window.location.pathname.includes("admin");
    setShowHeader(!pathIncludesAdmin);
  }, []);

  return (
    <BrowserRouter>
      {showHeader &&  <Header isLoggedIn={isLoggedIn} title={"signup"} /> } 
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route exact path="/user" element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login onLogin={handleLogin} title="Sign-In" />} />
        <Route path='*' element={<FileNotFound />} />
        <Route path='/admin' element={<AdminHomePage />} />
        <Route path='/admin/login' element={<Login onLogin={handleLogin} title="Admin Sign" />} />
        <Route path='/leadersboard' element={<LeadersBoard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
