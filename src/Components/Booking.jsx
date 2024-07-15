import React from 'react';
import Map from './Map';

const Booking = () => {
  return (
    <div className="flex bg-black h-screen">
      <div className="h-full space-y-32 gap-60 p-4">
        <h2 className="text-2xl font-bold mb-4">Get a ride</h2>
        <div className="space-y-4 gap-14">
          <input
            type="text"
            placeholder="Pickup location"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Dropoff location"
            className="w-full p-2 border rounded"
          />
          <select className="w-full p-2 text-black border rounded">
            <option>Pickup now</option>
            <option>Pickup later</option>

          </select>
          <select className="w-full text-black p-2 border rounded">
            <option>For me</option>
            <option>For Other</option>

          </select>
          <button className="w-full p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
      </div>
      <div className="w-2/3 pb-11">
        <Map />
      </div>
    </div>
  );
};

export default Booking;