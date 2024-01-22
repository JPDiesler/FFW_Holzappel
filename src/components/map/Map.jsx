// src/Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [50.353706219595985, 7.895778944946577]; // Default coordinates

  return (
    <MapContainer
      center={position}
      zoom={17}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.google.com/help/terms_maps/">Google Maps</a>'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
    </MapContainer>
  );
};

export default Map;
