import React from 'react';
import cab from '../assets/cab.jpg'

const TaxiBooking = () => {
  return (
    <div className="text-white bg-yellow-950 rounded-2xl my-8 mx-4 sm:mx-8 lg:mx-12 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <div className="text-yellow-400 mb-2 text-sm sm:text-base">CAB BOOKING</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Book Your CAB</h1>
          <h2 className="text-xl sm:text-2xl mb-4">On Online</h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-yellow-900 rounded p-2 text-white placeholder-gray-400"
            />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white placeholder-gray-400"
              />
              <select className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white">
                <option>Passengers</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Start Destination"
                className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="End Destination"
                className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="date"
                placeholder="Select Date"
                className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white"
              />
              <input
                type="time"
                placeholder="Select Time"
                className="w-full sm:w-1/2 bg-yellow-900 rounded p-2 text-white"
              />
            </div>
            <button className="w-full sm:w-auto bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
              BOOK NOW
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-50"></div>
            <img
              src={cab}
              alt="Yellow Taxi"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-repeat"
                 style={{backgroundImage: "url('/path-to-grid-pattern.png')"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiBooking;