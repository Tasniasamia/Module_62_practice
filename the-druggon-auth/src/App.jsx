import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
    <Header></Header>
    <div>
      <Outlet></Outlet>
    </div>
    </div>
  )
}

export default App
