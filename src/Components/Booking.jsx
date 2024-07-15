import React from 'react';
// import Map from './Map'; // We'll create this component for the map integration

const Booking = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 bg-white">
        <h2 className="text-2xl font-bold mb-4">Get a ride</h2>
        <div className="space-y-4">
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
          <select className="w-full p-2 border rounded">
            <option>Pickup now</option>
            {/* Add more options */}
          </select>
          <select className="w-full p-2 border rounded">
            <option>For me</option>
            {/* Add more options */}
          </select>
          <button className="w-full p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
      </div>
      <div className="w-2/3">
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default Booking;