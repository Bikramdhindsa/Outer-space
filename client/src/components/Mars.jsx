import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './css/pictureOfDay.scss'

export default function Mars() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    mapInstanceRef.current = L.map('mars-map').setView([0, 0], 3);

    L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png', {
      attribution: '© OpenPlanetaryMap'
    }).addTo(mapInstanceRef.current);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className='picofday'>
      <span className='pic_of_day'>
        Mars' Surface
      </span>
      <div id="mars-map" ref={mapRef} style={{ height: '80%', width: '90%', border: '1px solid #ccc', borderRadius: '5px' }}></div>
    </div>
  )
}