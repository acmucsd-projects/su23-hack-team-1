import logo from './logo.svg';
import './App.css';
import { useState} from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import{BrowserRouter, Routes, Route} from 'react-router-dom'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Sign up' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
