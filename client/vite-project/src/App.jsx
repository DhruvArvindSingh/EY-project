import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (<>
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/contact" element={<h1>Contact</h1>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
