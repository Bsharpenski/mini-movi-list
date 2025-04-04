import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx'
import Movies from './movies.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Movies</div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        
      </Routes>
    </>
  )
}

export default App
