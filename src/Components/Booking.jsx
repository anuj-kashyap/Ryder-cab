import React from 'react';
import cab from '../assets/cab.jpg'
const TaxiBooking = () => {
  return (
    <div className=" text-white mt-10 ml-12  flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="text-yellow-400 mb-2">CAB BOOKING</div>
          <h1 className="text-4xl font-bold mb-2">Book Your CAB</h1>
          <h2 className="text-2xl mb-4">On Online</h2>
          <p className="text-gray-400 mb-6">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full  rounded p-2 text-white"
            />
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-1/2  rounded p-2 text-white"
              />
              <select className="w-1/2  rounded p-2 text-white">
                <option>Passengers</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Start Destination"
                className="w-1/2  rounded p-2 text-white"
              />
              <input
                type="text"
                placeholder="End Destination"
                className="w-1/2  rounded p-2 text-white"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Select Date"
                className="w-1/2  rounded p-2 text-white"
              />
              <input
                type="time"
                placeholder="Select Time"
                className="w-1/2  rounded p-2 text-white"
              />
            </div>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
              BOOK NOW
            </button>
          </form>
        </div>
        <div className="w-1/2 relative">
          <div className="w-full h-64 lg:h-96 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0  opacity-50"></div>
            <img
              src={cab}
              alt="Yellow Taxi"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4"
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