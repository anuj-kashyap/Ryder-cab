import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import taxi from '../assets/taxi3.png';
import Cabs from './Cabs';
import hero from '../assets/hero.png';
import { debounce } from './Debounce';

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showCabs, setShowCabs] = useState(false);
  const [pickupCoords, setPickupCoords] = useState({ lat: null, lon: null });
  const [destinationCoords, setDestinationCoords] = useState({ lat: null, lon: null });
  const [distance, setDistance] = useState(null);

  console.log(pickup, destination, '--------------- ok');

  const API_KEY = import.meta.env.VITE_APP_GEOAPIFY_API_KEY;

  // Fetch suggestions for pickup
  const fetchPickupSuggestions = async (input) => {
    if (input.length > 2) {
      try {
        const encodedInput = encodeURIComponent(input);
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodedInput}&apiKey=${API_KEY}`
        );
        console.log(response, '----------------- pickup response');
        setPickupSuggestions(response.data.features);
      } catch (error) {
        console.error('Error fetching pickup suggestions:', error);
      }
    } else {
      setPickupSuggestions([]);
    }
  };

  // Fetch suggestions for destination
  const fetchDestinationSuggestions = async (input) => {
    if (input.length > 2) {
      try {
        const encodedInput = encodeURIComponent(input);
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodedInput}&apiKey=${API_KEY}`
        );
        console.log(response, '----------------- destination response');
        setDestinationSuggestions(response.data.features);
      } catch (error) {
        console.error('Error fetching destination suggestions:', error);
      }
    } else {
      setDestinationSuggestions([]);
    }
  };

  // Debounce the fetchSuggestions functions
  const debouncedFetchPickupSuggestions = useCallback(debounce(fetchPickupSuggestions, 500), []);
  const debouncedFetchDestinationSuggestions = useCallback(debounce(fetchDestinationSuggestions, 500), []);

  // Handle input change for pickup
  const handlePickupInputChange = (event) => {
    const newInput = event.target.value;
    setPickup(newInput);
    debouncedFetchPickupSuggestions(newInput); // Call the debounced function for pickup
  };

  // Handle input change for destination
  const handleDestinationInputChange = (event) => {
    const newInput = event.target.value;
    setDestination(newInput);
    debouncedFetchDestinationSuggestions(newInput); // Call the debounced function for destination
  };

  // Handle suggestion click for either input
  const handleSuggestionClick = (suggestion, setInput, setSuggestions, setCoords) => {
    setInput(suggestion.properties.formatted);
    setSuggestions([]);
    const { lat, lon } = suggestion.properties;
    setCoords({ lat, lon });
  };

  // Calculate Haversine distance
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
  }

  // Calculate the distance if both pickup and destination coordinates are set
  const calculateDistance = () => {
    if (pickupCoords.lat && pickupCoords.lon && destinationCoords.lat && destinationCoords.lon) {
      const calculatedDistance = haversineDistance(
        pickupCoords.lat,
        pickupCoords.lon,
        destinationCoords.lat,
        destinationCoords.lon
      );
      setDistance(calculatedDistance);
      console.log(`Distance: ${calculatedDistance.toFixed(2)} km`);
    }
  };

  // Call calculateDistance whenever the coordinates change
  React.useEffect(() => {
    calculateDistance();
  }, [pickupCoords, destinationCoords]);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col md:flex-row items-center bg-[radial-gradient(circle_1292px_at_-13.6%_51.7%,rgba(0,56,68,1)_0%,rgba(163,217,185,1)_51.5%,rgba(255,252,247,1)_88.6%)] rounded-lg overflow-hidden my-4 sm:my-6 md:my-8 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">Don't Wait Just</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-2 sm:mb-4">RYDE</h2>
          <p className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Request a RIDE, HOP, GO.</p>

          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Enter pickup location"
              className="w-full p-2 sm:p-3 rounded-xl bg-white text-black mb-2 shadow-md"
              value={pickup}
              onChange={handlePickupInputChange}
            />
            {pickupSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md max-h-40 overflow-y-auto">
                {pickupSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.properties.osm_id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion, setPickup, setPickupSuggestions, setPickupCoords)}
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
              className="w-full p-2 sm:p-3 rounded-xl bg-white text-black shadow-md"
              value={destination}
              onChange={handleDestinationInputChange}
            />
            {destinationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white text-black w-full rounded mt-1 shadow-md max-h-40 overflow-y-auto">
                {destinationSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.properties.osm_id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleSuggestionClick(suggestion, setDestination, setDestinationSuggestions, setDestinationCoords)
                    }
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
          {distance && (
            <p className="text-xl text-white mt-4">
              Distance: {distance.toFixed(2)} km
            </p>
          )}
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <motion.img
            src={hero}
            alt="Uber ride illustration"
            className="w-full h-auto rounded-3xl shadow-lg shadow-green-400"
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
