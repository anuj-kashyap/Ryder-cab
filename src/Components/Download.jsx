import React from 'react'
import ps from '../assets/play_store.png'
import as from '../assets/app_store.png'

function Download() {
  return (
    <div className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-4 py-8 md:py-16'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-14 text-center'>
          Download Our APP
        </h1>
        <div className='flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-12 lg:space-x-20'>
          <a href="https://play.google.com/store/games" className='w-full sm:w-auto'>
            <img
              src={ps}
              alt="Play Store"
              className='w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto rounded-lg shadow-lg hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'
            />
          </a>
          <a href="https://www.apple.com/in/app-store/" className='w-full sm:w-auto'>
            <img
              src={as}
              alt="App Store"
              className='w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto rounded-lg shadow-lg hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Download