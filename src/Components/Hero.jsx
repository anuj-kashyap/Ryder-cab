import React from 'react';
import taxi from '../assets/3644592.jpg'
function Hero() {
  return (
    <div className="flex  text-white p-8">
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl mt-24 font-bold mb-4">Don't Wait Just</h1>
        <h1 className=' text-6xl font-bold'>RYDE</h1>
        <p className="mb-6 text-2xl">Request a ride, hop in, and go.</p>
        
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Enter location" 
            className="w-full p-3 rounded bg-white text-black mb-2"
          />
          <input 
            type="text" 
            placeholder="Enter destination" 
            className="w-full p-3 rounded bg-white text-black"
          />
        </div>
        
        <button className="bg-white text-black font-semibold py-2 px-4 rounded">
          See prices
        </button>
      </div>
      
      <div className="w-full">
        <img 
          src={taxi} 
          alt="Uber ride illustration" 
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
}

export default Hero;