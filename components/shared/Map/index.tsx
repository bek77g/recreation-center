'use client';

import { load } from '@2gis/mapgl';
import { useEffect } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom: number;
  className?: string;
}

export const Map = ({ latitude = 0, longitude = 0, zoom = 13, className }: MapProps) => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [latitude, longitude],
        zoom,
        key: process.env.NEXT_2GIS_API_KEY,
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className={`${!latitude || !longitude ? 'hidden' : ''} ${className}`}
    >
      <div id="map-container" style={{ height: '100%', width: '100%' }} />
    </div>
  );
};
