import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import About from "./pages/About";
import Registration from './pages/Registration';
import NavBar from "./components/NavBar";

function App() {

  return (
    <div id='data'>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
  </div>
  );
}



export default App;
