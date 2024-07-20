import React, { useState, useEffect } from 'react';
import axios from 'axios';
import taxi from '../assets/3644592.jpg';

function Hero() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

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
    <div className="flex text-white p-8">
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl mt-24 font-bold mb-4">Don't Wait Just</h1>
        <h1 className='text-6xl font-bold'>RYDE</h1>
        <p className="mb-6 text-2xl">Request a RIDE, HOP, GO.</p>
        
        <div className="mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="w-full p-3 rounded bg-white text-black mb-2"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            {pickupSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1">
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
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter destination" 
              className="w-full p-3 rounded bg-white text-black"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            {destinationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1">
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
        </div>
        
        <button className="bg-white text-black font-semibold py-2 px-4 rounded">
          See prices
        </button>
      </div>
      
      <div className="w-full">
        <img 
          src={taxi} 
          alt="Uber ride illustration" 
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;