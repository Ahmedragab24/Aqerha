/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { MapPin, Search, Locate, Loader2 } from "lucide-react";

interface LocationMapProps {
  onLocationSelect: (location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
  }) => void;
}

// Declare global google object
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// حدود المملكة
const saudiBounds = {
  north: 32.158,
  south: 16.002,
  west: 34.495,
  east: 55.667,
};
const saudiCenter = { lat: 24.7136, lng: 46.6753 };

const LocationMap = ({ onLocationSelect }: LocationMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    city: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const geocoderRef = useRef<any>(null);

  const extractCity = (results: any[]): string => {
    for (const result of results) {
      const cityComponent = result.address_components.find(
        (comp: any) =>
          comp.types.includes("locality") ||
          comp.types.includes("administrative_area_level_1")
      );
      if (cityComponent) return cityComponent.long_name;
    }
    return "غير معروف";
  };

  const handleLocationSelect = useCallback(
    (location: {
      lat: number;
      lng: number;
      address: string;
      city?: string;
    }) => {
      const finalLocation = {
        ...location,
        city: location.city || "غير معروف",
      };
      setSelectedLocation(finalLocation);
      onLocationSelect(finalLocation);
    },
    [onLocationSelect]
  );

  // تحميل Google Maps
  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        if (window.google && window.google.maps) {
          initializeMap();
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&language=ar&region=SA&callback=initMap`;
        script.async = true;
        script.defer = true;

        window.initMap = initializeMap;

        script.onerror = () => {
          setMapError("فشل في تحميل خرائط جوجل. تحقق من مفتاح API.");
          setIsMapLoading(false);
        };

        document.head.appendChild(script);
      } catch (error) {
        console.log(error);
        setMapError("حدث خطأ في تحميل الخريطة");
        setIsMapLoading(false);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;
      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: saudiCenter,
          zoom: 6,
          restriction: {
            latLngBounds: saudiBounds,
            strictBounds: false,
          },
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        mapInstanceRef.current = map;
        geocoderRef.current = new window.google.maps.Geocoder();

        map.addListener("click", (event: any) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();

          geocoderRef.current.geocode(
            { location: { lat, lng } },
            (results: any[], status: string) => {
              let address = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
              let city = "غير معروف";

              if (status === "OK" && results[0]) {
                address = results[0].formatted_address;
                city = extractCity(results);
              }

              updateMarker(lat, lng);
              handleLocationSelect({ lat, lng, address, city });
            }
          );
        });

        setIsMapLoading(false);
      } catch (error) {
        console.log(error);
        setMapError("فشل في تهيئة الخريطة");
        setIsMapLoading(false);
      }
    };

    loadGoogleMaps();

    return () => {
      if (Object.prototype.hasOwnProperty.call(window, "initMap")) {
        delete (window as any).initMap;
      }
    };
  }, [handleLocationSelect]);

  const updateMarker = (lat: number, lng: number) => {
    if (!mapInstanceRef.current || !window.google) return;

    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    markerRef.current = new window.google.maps.Marker({
      position: { lat, lng },
      map: mapInstanceRef.current,
      title: "الموقع المحدد",
      animation: window.google.maps.Animation.DROP,
    });

    mapInstanceRef.current.setCenter({ lat, lng });
  };

  const handleSearch = async (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !geocoderRef.current) return;
    setIsSearching(true);

    try {
      geocoderRef.current.geocode(
        { address: searchQuery, componentRestrictions: { country: "SA" } },
        (results: any[], status: string) => {
          setIsSearching(false);
          if (status === "OK" && results[0]) {
            const location = results[0].geometry.location;
            const lat = location.lat();
            const lng = location.lng();
            const address = results[0].formatted_address;
            const city = extractCity(results);

            updateMarker(lat, lng);
            handleLocationSelect({ lat, lng, address, city });
          } else {
            alert("لم يتم العثور على الموقع.");
          }
        }
      );
    } catch (error) {
      console.log(error);
      setIsSearching(false);
      alert("حدث خطأ أثناء البحث");
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          if (
            lat >= saudiBounds.south &&
            lat <= saudiBounds.north &&
            lng >= saudiBounds.west &&
            lng <= saudiBounds.east
          ) {
            geocoderRef.current.geocode(
              { location: { lat, lng } },
              (results: any[], status: string) => {
                let address = "الموقع الحالي";
                let city = "غير معروف";

                if (status === "OK" && results[0]) {
                  address = results[0].formatted_address;
                  city = extractCity(results);
                }

                updateMarker(lat, lng);
                handleLocationSelect({ lat, lng, address, city });
              }
            );
          } else {
            alert("موقعك الحالي خارج المملكة العربية السعودية");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("فشل في الحصول على الموقع الحالي");
        }
      );
    } else {
      alert("المتصفح لا يدعم تحديد الموقع");
    }
  };

  const saudiCities = [
    { name: "الرياض", lat: 24.7136, lng: 46.6753 },
    { name: "جدة", lat: 21.4858, lng: 39.1925 },
    { name: "مكة المكرمة", lat: 21.3891, lng: 39.8579 },
    { name: "المدينة المنورة", lat: 24.5247, lng: 39.5692 },
    { name: "الدمام", lat: 26.4207, lng: 50.0888 },
    { name: "الطائف", lat: 21.2854, lng: 40.4183 },
  ];

  const handleCityClick = (
    city: (typeof saudiCities)[0],
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    updateMarker(city.lat, city.lng);
    handleLocationSelect({
      lat: city.lat,
      lng: city.lng,
      address: `${city.name}, المملكة العربية السعودية`,
      city: city.name,
    });
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Search */}
          <div className="flex gap-2">
            <Input
              placeholder="ابحث عن موقع في السعودية..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(e as any)}
            />
            <Button
              onClick={(e) => handleSearch(e as any)}
              disabled={isSearching}
              variant="outline"
            >
              {isSearching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={getCurrentLocation}
              variant="outline"
              title="استخدام الموقع الحالي"
            >
              <Locate className="h-4 w-4" />
            </Button>
          </div>

          {/* Google Map */}
          <div className="relative">
            {isMapLoading && (
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 mx-auto animate-spin text-blue-500 mb-2" />
                  <p className="text-gray-500">جاري تحميل الخريطة...</p>
                </div>
              </div>
            )}
            {mapError && (
              <div className="h-64 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-red-400 mb-2" />
                  <p className="text-red-600">{mapError}</p>
                </div>
              </div>
            )}
            <div
              ref={mapRef}
              className={`h-64 rounded-lg ${
                isMapLoading || mapError ? "hidden" : ""
              }`}
              style={{ minHeight: "300px" }}
            />
          </div>

          {/* Quick City Selection */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">المدن الرئيسية:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {saudiCities.map((city, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={(e) => handleCityClick(city, e)}
                  className="justify-start h-auto p-2 !text-[10px]"
                >
                  <MapPin className="!h-3 !w-3 mr-2 flex-shrink-0" />
                  <span>{city.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Selected Location Display */}
          {selectedLocation && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">
                    الموقع المحدد:
                  </p>
                  <p className="text-xs text-gray-500">
                    المدينة: {selectedLocation.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedLocation.lat.toFixed(6)},{" "}
                    {selectedLocation.lng.toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
