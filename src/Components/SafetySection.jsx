import React from 'react';
import safety from '../assets/safet2.svg'

const SafetySection = () => {
  return (
    <div className="container mx-auto bg-slate-100 rounded-3xl my-8 sm:my-12 md:my-20 p-4 sm:p-8 md:p-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-black text-center font-bold mb-8 sm:mb-12">
        We care about safety
      </h1>

      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 border-l-2 border-gray-300"></div>
            <div className='w-full'>
              <img src={safety} alt="Safety illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl text-black font-bold mb-2">Rating system</h2>
            <p className="text-gray-600 text-sm sm:text-base">We ask users to give us their honest feedback after each ride. You can choose your driver based on the experience of previous riders</p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl text-black font-bold mb-2">Mandatory checks</h2>
            <p className="text-gray-600 text-sm sm:text-base">All drivers must pass background check before driving with inDrive</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl text-black font-bold mb-2">Safety button</h2>
            <p className="text-gray-600 text-sm sm:text-base">Tap it to quickly contact the police or emergency services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;