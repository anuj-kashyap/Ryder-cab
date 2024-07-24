import React, { useState } from 'react';


function Fare() {
    const [distance, setDistance] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [fareType, setFareType] = useState('standard');

    const calculateFare = () => {
        const baseRate = 2.50;
        const ratePerKm = 1.50;
        const passengerSurcharge = 0.50;

        let fare = baseRate + (distance * ratePerKm);

        if (passengers > 1) {
            fare += (passengers - 1) * passengerSurcharge;
        }

        if (fareType === 'premium') {
            fare *= 1.2;
        }

        return fare.toFixed(2);
    };

    return (
        <div className="flex items-center justify-center bg-cover bg-center bg-fixed p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full max-w-md bg-white bg-opacity-80 rounded-2xl shadow-2xl backdrop-blur-sm p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-gray-800 text-center mb-4 sm:mb-6">Fare Estimator</h1>

                <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="distance">
                        Distance (km)
                    </label>
                    <input
                        className="w-full px-3 py-2 sm:px-4 sm:py-2 text-gray-700 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                        id="distance"
                        type="number"
                        placeholder="Enter distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>

                <div className="mb-4 sm:mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="passengers">
                        Number of Passengers
                    </label>
                    <select
                        className="w-full px-3 py-2 sm:px-4 sm:py-2 text-gray-700 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                        id="passengers"
                        value={passengers}
                        onChange={(e) => setPassengers(parseInt(e.target.value))}
                    >
                        {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-6 sm:mb-8">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Fare Type
                    </label>
                    <div className="flex flex-col sm:flex-row sm:justify-around">
                        {['standard', 'premium'].map((type) => (
                            <label key={type} className="inline-flex items-center mb-2 sm:mb-0">
                                <input
                                    type="radio"
                                    className="form-radio text-blue-600"
                                    name="fareType"
                                    value={type}
                                    checked={fareType === type}
                                    onChange={() => setFareType(type)}
                                />
                                <span className="ml-2 text-gray-700 capitalize">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300">
                    <p className="text-base sm:text-lg font-semibold text-white mb-2">Estimated Fare</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white">${calculateFare()}</p>
                </div>
            </div>
        </div>
    );
}

export default Fare;