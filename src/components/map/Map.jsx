import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null); // Store the map instance
  const position = [50.353706219595985, 7.895778944946577]; // Default coordinates

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: position,
        zoom: 17,
        attributionControl: false,
        layers: [
          L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
            attribution:
              '&copy; <a href="https://www.google.com/help/terms_maps/">Google Maps</a>',
          }),
        ],
      });
      L.control
        .attribution({
          prefix:
            "<a href='https://www.feuerwehr-holzappel.de/'><img src='public/fire.png' height='16px'/>Feuerwehr Holzappel</a> |<a href='https://leafletjs.com/blog.html'><img src ='https://react-leaflet.js.org/img/logo.svg' height='24px'/>Leaflet</a>",
        })
        .addTo(mapInstance.current);
    }
  }, []);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
};

export default Map;
