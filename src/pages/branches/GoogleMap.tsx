import React, { useEffect } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
}

const GoogleMap: React.FC<MapProps> = ({ latitude, longitude }) => {
  useEffect(() => {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 15, // You can adjust the zoom level as needed
    };

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'Location Marker',
    });
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;
