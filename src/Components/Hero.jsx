import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import taxi from '../assets/3644592.jpg';
import Cabs from './Cabs'; // Assuming Cabs component is in the same folder

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showCabs, setShowCabs] = useState(false);

  const API_KEY = import.meta.env.VITE_APP_GEOAPIFY_API_KEY;

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
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg overflow-hidden my-4 sm:my-6 md:my-8 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">Don't Wait Just</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-2 sm:mb-4">RYDE</h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 sm:mb-6">Request a RIDE, HOP, GO.</p>
          
          <div className="mb-4 relative">
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="w-full p-2 sm:p-3 rounded bg-white text-black mb-2 shadow-md"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            {pickupSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md max-h-40 overflow-y-auto">
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
              className="w-full p-2 sm:p-3 rounded bg-white text-black shadow-md"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            {destinationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md max-h-40 overflow-y-auto">
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

          <div className="flex justify-center sm:justify-start">
            <motion.button 
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-orange-700 text-sm sm:text-base"
              onClick={() => setShowCabs(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Cabs
            </motion.button>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <motion.img 
            src={taxi} 
            alt="Uber ride illustration" 
            className="w-full h-auto rounded-3xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showCabs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Cabs />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;