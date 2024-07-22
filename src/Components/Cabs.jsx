import React from 'react';

const Cabs = () => {
  const taxis = [
    {
      name: 'BASIC TAXI',
      image: '/path-to-basic-taxi.png',
      rating: 4.7,
      initialCharge: 2.50,
      upTo50Mins: 1.50,
      additionalMiles: 0.80,
      perStopTraffic: 0.4,
      capacity: 4,
      airConditioner: 'Yes'
    },
    {
      name: 'STANDARD TAXI',
      image: '/path-to-standard-taxi.png',
      rating: 5.0,
      initialCharge: 3.20,
      upTo50Mins: 2.10,
      additionalMiles: 0.90,
      perStopTraffic: 0.5,
      capacity: 4,
      airConditioner: 'Yes'
    },
    {
      name: 'LUXURIOUS TAXI',
      image: '/path-to-luxurious-taxi.png',
      rating: 5.0,
      initialCharge: 5.68,
      upTo50Mins: 3.60,
      additionalMiles: 1.20,
      perStopTraffic: 0.8,
      capacity: 3,
      airConditioner: 'Yes'
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base text-gray-600 font-semibold mb-2">= OUR TAXI</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Choose Our Taxi</h2>
          <h3 className="text-2xl text-gray-600 mb-4">Collection</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here'.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxis.map((taxi, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={taxi.image} alt={taxi.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{taxi.name}</h3>
                <div className="bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-full inline-block mb-4">
                  ★ {taxi.rating}
                </div>
                <table className="w-full text-sm mb-4">
                  <tbody>
                    <tr><td>Initial Charge:</td><td>${taxi.initialCharge.toFixed(2)}</td></tr>
                    <tr><td>Up To 50 Mins:</td><td>${taxi.upTo50Mins.toFixed(2)}</td></tr>
                    <tr><td>Additional Miles:</td><td>${taxi.additionalMiles.toFixed(2)}</td></tr>
                    <tr><td>Per Stop Traffic:</td><td>${taxi.perStopTraffic.toFixed(2)}</td></tr>
                    <tr><td>Capacity:</td><td>{taxi.capacity}</td></tr>
                    <tr><td>Air Conditioner:</td><td>{taxi.airConditioner}</td></tr>
                  </tbody>
                </table>
                <button className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cabs;