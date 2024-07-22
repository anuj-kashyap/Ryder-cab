import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Tag, Info } from 'lucide-react';
import taxi from '../assets/3644592.jpg';
import Cabs from './Cabs'; // Assuming Cabs component is in the same folder

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showCabs, setShowCabs] = useState(false); // State to show/hide Cabs component

  const API_KEY = import.meta.env.VITE_APP_GEOAPIFY_API_KEY; // Replace with your actual API key

  useEffect(() => {
    const fetchSuggestions = async (input, setSuggestions) => {
      if (input.length > 2) {
        try {
          const encodedInput = encodeURIComponent(input);
          const response = await axios.get(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodedInput}&apiKey=${API_KEY}`
          );
          setSuggestions(response.data.features);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    const pickupDebounce = setTimeout(() => fetchSuggestions(pickup, setPickupSuggestions), 300);
    const destinationDebounce = setTimeout(() => fetchSuggestions(destination, setDestinationSuggestions), 300);

    return () => {
      clearTimeout(pickupDebounce);
      clearTimeout(destinationDebounce);
    };
  }, [pickup, destination]);

  const handleSuggestionClick = (suggestion, setInput, setSuggestions) => {
    setInput(suggestion.properties.formatted);
    setSuggestions([]);
  };

  return (
    <div className="container max-h-full mx-auto max-w-7xl px-4">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg overflow-hidden my-6 p-8">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Don't Wait Just</h1>
          <h2 className="text-6xl font-bold text-orange-600 mb-4">RYDE</h2>
          <p className="text-2xl text-gray-700 mb-6">Request a RIDE, HOP, GO.</p>
          
          <div className="mb-4 relative">
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="w-full p-3 rounded bg-white text-black mb-2 shadow-md"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            {pickupSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md">
                {pickupSuggestions.map((suggestion) => (
                  <li 
                    key={suggestion.properties.osm_id} 
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion, setPickup, setPickupSuggestions)}
                  >
                    {suggestion.properties.formatted}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="mb-4 relative">
            <input 
              type="text" 
              placeholder="Enter destination" 
              className="w-full p-3 rounded bg-white text-black shadow-md"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            {destinationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md">
                {destinationSuggestions.map((suggestion) => (
                  <li 
                    key={suggestion.properties.osm_id} 
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion, setDestination, setDestinationSuggestions)}
                  >
                    {suggestion.properties.formatted}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-4">
            <button 
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-orange-700"
              onClick={() => setShowCabs(true)} // Show Cabs component when clicked
            >
              See Prices
            </button>
            <button 
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-orange-700"
              onClick={() => setShowCabs(true)} // Show Cabs component when clicked
            >
              See Cabs
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img 
            src={taxi} 
            alt="Uber ride illustration" 
            className="w-full h-auto rounded-3xl shadow-md"
          />
        </div>
      </div>

      {showCabs && <Cabs />} {/* Conditionally render Cabs component */}
    </div>
  );
};

export default Hero;
