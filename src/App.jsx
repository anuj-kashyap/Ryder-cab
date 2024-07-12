import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Mobility from './Components/Mobility'

function App() {
  return (
    <div className="bg-[linear-gradient(to_bottom_right,#030304,#180f16,#2a1517,#341f0f,#302e0b)] min-h-screen text-white">
      <Navbar />
      <Hero/>
      <Mobility/>
      <main className="container mx-auto mt-4">
        {/* <h1 className="text-2xl font-bold"></h1> */}
        {/* Add more content here */}
      </main>
    </div>
  )
}

export default App