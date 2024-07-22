import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'

import Download from './Components/Download'
import Booking from './Components/Booking'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FareEstimator from './pages/FareEstimator'
import About from './Components/About'

import Customer_Support from './Components/Customer_support'

function App() {
  return (
    <div className="bg-[linear-gradient(to_bottom_right,#030304,#180f16,#2a1517,#341f0f,#302e0b)] min-h-screen text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/FareEstimator" element={<FareEstimator />} />
          <Route path="/About_us" element={<About />} />
          <Route path="/Support" element={<Customer_Support />} />
        </Routes>
        <Download />

        <Footer />
      </Router>
    </div>
  )
}

export default App