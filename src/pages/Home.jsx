import React from 'react'
import Hero from '../Components/Hero'
import Mobility from '../Components/Mobility'
import SafetySection from '../Components/SafetySection'
import Download from '../Components/Download'

function Home() {
  return (
    <div>
      <Hero/>
      <Mobility/>
      <SafetySection/>
      {/* <Download/> */}
    </div>
  )
}

export default Home