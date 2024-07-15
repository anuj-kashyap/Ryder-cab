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
            {/* <div className="absolute top-8 left-8 w-48 h-48 bg-lime-400 rounded-full"></div> */}
            {/* <svg className="relative z-10 w-64 h-64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 11V7L14 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 3V7H18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11H14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15H11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
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