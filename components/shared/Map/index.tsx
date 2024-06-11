'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface MapProps {
  longitude: number;
  latitude: number;
  zoom: number;
  className?: string;
  title?: string;
}

export const Map = ({
  longitude = 0,
  latitude = 0,
  zoom = 13,
  className,
  title = '',
}: MapProps) => {
  if (!longitude && !latitude) return null;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>{title ? <Popup>{title}</Popup> : null}</Marker>
    </MapContainer>
  );
};
