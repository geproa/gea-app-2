// import React, { useEffect, useRef, useState } from "react";

// const centers = [
//     { 
//         name: "New York Enrollment Center",
//         address: "Terminal 4, JFK International Airport, Jamaica, NY 11430, United States",
//         hours: "Monday to Friday: 8:00 AM - 5:00 PM",
//         phone: "+1 123-456-7890",
//         location: { lat: 40.6437, lng: -73.7900 } // Sample coordinates for New York
//     },
//     { 
//         name: "Los Angeles Enrollment Center",
//         address: "Los Angeles International Airport, 1 World Way, Los Angeles, CA 90045, United States",
//         hours: "Monday to Friday: 9:00 AM - 6:00 PM",
//         phone: "+1 987-654-3210",
//         location: { lat: 33.9416, lng: -118.4085 } // Sample coordinates for Los Angeles
//     },
//     // Add more centers as needed
// ];

// const EnrollmentCenters = () => {
//   const mapContainerRef = useRef(null);
//   const [selectedCenter, setSelectedCenter] = useState(centers[0]); // Initially select the first center
//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     if (!mapLoaded) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
//       script.defer = true;
//       script.async = true;
//       script.onload = () => setMapLoaded(true);
//       document.head.appendChild(script);
//     } else {
//       initMap();
//     }
//   }, [mapLoaded, selectedCenter]);

//   const initMap = () => {
//     const map = new window.google.maps.Map(mapContainerRef.current, {
//         center: selectedCenter.location, // Set the selected center's location as the map center
//         zoom: 12 // Adjust zoom level as needed
//     });

//     // Add marker for the selected center
//     new window.google.maps.Marker({
//         position: selectedCenter.location,
//         map: map,
//         title: selectedCenter.name
//     });
//   };

//   const handleCenterChange = (event) => {
//     const selectedCenterName = event.target.value;
//     const center = centers.find(center => center.name === selectedCenterName);
//     setSelectedCenter(center);
//   };

//   return (
//     <div>
//         <h1>Global Entry Enrollment Centers</h1>

//         <select value={selectedCenter.name} onChange={handleCenterChange}>
//             {centers.map(center => (
//                 <option key={center.name} value={center.name}>{center.name}</option>
//             ))}
//         </select>

//         <ul>
//             <li>
//                 <h3>{selectedCenter.name}</h3>
//                 <p><strong>Address:</strong> {selectedCenter.address}</p>
//                 <p><strong>Hours:</strong> {selectedCenter.hours}</p>
//                 <p><strong>Phone:</strong> {selectedCenter.phone}</p>
//             </li>
//         </ul>

//         <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default EnrollmentCenters;


import { useState } from "react";
import Link from "next/link";
import styles from "../styles/pages.module.css";

import Tab1 from "@/components/Tab1";
import Tab2 from "@/components/Tab2";
import Tab3 from "@/components/Tab3";

export default function EnrollmentCenters() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>CBP Enrollment Centers</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        <div className={styles.faq}>
          <h2 className="mb-10 text-2xl">
            Find Your Nearest Enrollment Center
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row list"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      " text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-blue-300 bg-blueGray-600"
                        : "tabs text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Global Entry Enrollment Centers
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-blue-300 bg-blueGray-600"
                        : "tabs text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    NEXUS Enrollment Centers
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-blue-300 bg-blueGray-600"
                        : "tabs text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    SENTRI Enrollment Centers
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <Tab1 />
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <Tab2 />
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <Tab3 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.ctaBtns}>
          <Link href="/usa-info">USA Global Entry</Link>
          <Link href="/canada-info">Canada NEXUS</Link>
          <Link href="/mexico-info">Mexico Sentri</Link>
        </section>
      </section>
    </main>
  );
}
