import React from 'react'
import Register from './Pages/Register'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App