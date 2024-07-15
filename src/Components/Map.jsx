import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 28.6139,
  lng: 77.2090
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBLZDtJHnN8wUZg6CLgSd8m4Q4lTWNKWCQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers, etc. here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;