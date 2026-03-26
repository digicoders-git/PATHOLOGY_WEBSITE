import React, { useEffect, useRef, useState } from "react";

const MapPicker = ({ lat, lng, onLocationSelect }) => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const googleMapRef = useRef(null);
  const markerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getAddress = (latitude, longitude) => {
    if (!window.google) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
        if (status === "OK" && results[0]) {
            const formattedAddress = results[0].formatted_address;
            if (searchInputRef.current) {
                searchInputRef.current.value = formattedAddress;
            }
            onLocationSelect?.({ 
                lat: latitude, 
                lng: longitude, 
                address: formattedAddress 
            });
        } else {
            onLocationSelect?.({ lat: latitude, lng: longitude });
        }
    });
  };

  useEffect(() => {
    if (!window.google || googleMapRef.current) return;

    const initialPos = { 
      lat: parseFloat(lat) || 20.5937, 
      lng: parseFloat(lng) || 78.9629 
    };

    const map = new window.google.maps.Map(mapRef.current, {
      center: initialPos,
      zoom: lat ? 15 : 5,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    googleMapRef.current = map;

    const marker = new window.google.maps.Marker({
      position: initialPos,
      map: map,
      draggable: true,
      animation: window.google.maps.Animation.DROP,
    });
    markerRef.current = marker;
    setIsLoaded(true);

    map.addListener("click", (e) => {
      const newPos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      marker.setPosition(newPos);
      getAddress(newPos.lat, newPos.lng);
    });

    marker.addListener("dragend", () => {
      const pos = marker.getPosition();
      const newPos = { lat: pos.lat(), lng: pos.lng() };
      getAddress(newPos.lat, newPos.lng);
    });

    const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current);
    autocomplete.bindTo("bounds", map);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) return;

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      
      const newPos = { 
        lat: place.geometry.location.lat(), 
        lng: place.geometry.location.lng() 
      };
      marker.setPosition(newPos);
      onLocationSelect?.({ ...newPos, address: place.formatted_address });
    });

  }, []);

  const handleCurrentLocation = () => {
      if (navigator.geolocation && googleMapRef.current && markerRef.current) {
          navigator.geolocation.getCurrentPosition((position) => {
              const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
              googleMapRef.current.setCenter(pos);
              googleMapRef.current.setZoom(16);
              markerRef.current.setPosition(pos);
              getAddress(pos.lat, pos.lng);
          });
      }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
          <div className="relative flex-1 group">
             <input
               ref={searchInputRef}
               type="text"
               placeholder="Search accurate lab location..."
               className="w-full pl-6 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-primary/40 focus:bg-white shadow-sm transition-all"
             />
          </div>
          <button 
            type="button"
            onClick={handleCurrentLocation}
            className="px-8 py-3 bg-secondary text-white text-[9px] font-black uppercase tracking-widest rounded-2xl hover:opacity-80 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Use My Location
          </button>
      </div>

      <div 
        ref={mapRef} 
        className="w-full h-80 rounded-3xl border-2 border-gray-100 shadow-inner bg-gray-50 overflow-hidden"
      ></div>
      
      {!isLoaded && <div className="text-[9px] font-bold text-gray-400 animate-pulse tracking-widest uppercase text-center py-10 border border-dashed rounded-3xl">Initializing Maps Module...</div>}
      
      <p className="text-[9px] font-bold text-gray-400/60 uppercase tracking-widest px-2 italic text-center">
          * Coordinates are automatically synced as you move the marker
      </p>
    </div>
  );
};

export default MapPicker;
