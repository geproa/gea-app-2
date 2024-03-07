import React, { useEffect, useRef, useState } from "react";

const centers = [
    { 
        name: "New York Enrollment Center",
        address: "Terminal 4, JFK International Airport, Jamaica, NY 11430, United States",
        hours: "Monday to Friday: 8:00 AM - 5:00 PM",
        phone: "+1 123-456-7890",
        location: { lat: 40.6437, lng: -73.7900 } // Sample coordinates for New York
    },
    { 
        name: "Los Angeles Enrollment Center",
        address: "Los Angeles International Airport, 1 World Way, Los Angeles, CA 90045, United States",
        hours: "Monday to Friday: 9:00 AM - 6:00 PM",
        phone: "+1 987-654-3210",
        location: { lat: 33.9416, lng: -118.4085 } // Sample coordinates for Los Angeles
    },
    // Add more centers as needed
];

const EnrollmentCenters = () => {
  const mapContainerRef = useRef(null);
  const [selectedCenter, setSelectedCenter] = useState(centers[0]); // Initially select the first center
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [mapLoaded, selectedCenter]);

  const initMap = () => {
    const map = new window.google.maps.Map(mapContainerRef.current, {
        center: selectedCenter.location, // Set the selected center's location as the map center
        zoom: 12 // Adjust zoom level as needed
    });

    // Add marker for the selected center
    new window.google.maps.Marker({
        position: selectedCenter.location,
        map: map,
        title: selectedCenter.name
    });
  };

  const handleCenterChange = (event) => {
    const selectedCenterName = event.target.value;
    const center = centers.find(center => center.name === selectedCenterName);
    setSelectedCenter(center);
  };

  return (
    <div>
        <h1>Global Entry Enrollment Centers</h1>

        <select value={selectedCenter.name} onChange={handleCenterChange}>
            {centers.map(center => (
                <option key={center.name} value={center.name}>{center.name}</option>
            ))}
        </select>

        <ul>
            <li>
                <h3>{selectedCenter.name}</h3>
                <p><strong>Address:</strong> {selectedCenter.address}</p>
                <p><strong>Hours:</strong> {selectedCenter.hours}</p>
                <p><strong>Phone:</strong> {selectedCenter.phone}</p>
            </li>
        </ul>

        <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default EnrollmentCenters;
