import React from 'react';
import safety from '../assets/safet2.svg'
const SafetySection = () => {
  return (
    <div className="container bg-slate-100 mb-20 mt-24 p px-4 py-12">
      <h1 className="text-5xl text-black flex justify-center font-bold mb-12">
        We care about safety

        {/* <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-400 -z-10"></span>
        </span> */}
      </h1>

      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gray-300"></div>
            <div className='w-full'
            ><img src={safety} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full mt-36 md:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl text-black font-bold mb-2">Rating system</h2>
            <p className="text-gray-600">We ask users to give us their honest feedback after each ride. You can choose your driver based on the experience of previous riders</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-black font-bold mb-2">Mandatory checks</h2>
            <p className="text-gray-600">All drivers must pass background check before driving with inDrive</p>
          </div>

          <div>
            <h2 className="text-2xl text-black font-bold mb-2">Safety button</h2>
            <p className="text-gray-600">Tap it to quickly contact the police or emergency services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;