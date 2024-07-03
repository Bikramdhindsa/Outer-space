import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './css/pictureOfDay.scss'

export default function Moon() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; 

    mapRef.current = L.map('map').setView([0, 0], 3);

    L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png', {
      attribution: '© OpenPlanetaryMap'
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (<>
    <div className='picofday'>
        <span className='pic_of_day'>
                Moon's Surface
        </span>
        <div id="map" style={{ height: '80%', width: '90%', border: '1px solid #ccc',borderRadius: '5px'}}></div>
    </div>
    
  </>)
}