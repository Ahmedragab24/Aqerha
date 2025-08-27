"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface Props {
  location: {
    latitude: number;
    longitude: number;
  };
  address?: string;
  zoom?: number;
  height?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
    initMap: () => void;
  }
}

const GoogleMapProperty = ({
  location,
  address,
  zoom = 15,
  height = "400px",
}: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        initializeMap();
      };

      script.onerror = () => {
        setError("Failed to load Google Maps");
      };

      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: location.latitude, lng: location.longitude },
          zoom: zoom,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
        });

        // Custom marker
        const marker = new window.google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#3B82F6",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 3,
          },
        });

        // Info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
         
              ${
                address
                  ? `<p class="text-sm text-gray-600 mt-1">${address}</p>`
                  : ""
              }
              <p class="text-xs text-gray-500 mt-1">
                ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(
            6
          )}
              </p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        setIsLoaded(true);
      } catch (err) {
        setError("Failed to initialize map");
        console.error("Map initialization error:", err);
      }
    };

    loadGoogleMaps();
  }, [location.latitude, location.longitude, zoom, address]);

  if (error) {
    return (
      <Card className="p-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-red-500 mb-2">⚠️</div>
              <p className="text-sm text-gray-600">{error}</p>
              <p className="text-xs text-gray-500 mt-1">
                Please check your API key
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div ref={mapRef} style={{ height }} className="w-full rounded-lg" />

          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Loading map...</p>
              </div>
            </div>
          )}

          {/* Property info overlay */}
          {isLoaded && (
            <div className="absolute top-20 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 max-w-xs">
              {address && (
                <p className="text-xs text-gray-600 mt-1">{address}</p>
              )}
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMapProperty;
