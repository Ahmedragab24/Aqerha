/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";
import type { RealEstesType } from "@/types/Real-estates";

interface Props {
  properties: RealEstesType[];
}

const FindRealEstateOnMap = ({ properties }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const initializeMap = () => {
    if (!mapRef.current) return;

    try {
      const map = new google.maps.Map(mapRef.current, {
        zoom: 6,
        center: { lat: 24.7136, lng: 46.6753 }, // الرياض
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      mapInstanceRef.current = map;
      infoWindowRef.current = new google.maps.InfoWindow();

      addSearchBox(map);
      addLocateMeButton(map);
      addDistanceMeasurement(map);

      addPropertyMarkers(map);

      setIsMapLoading(false);
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError("حدث خطأ في تهيئة الخريطة");
      setIsMapLoading(false);
    }
  };

  // ✅ صندوق البحث
  const addSearchBox = (map: google.maps.Map) => {
    if (!searchBoxRef.current) return;
    const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      searchBoxRef.current
    );

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (!places || places.length === 0) return;

      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) return;
        if (place.geometry.viewport) bounds.union(place.geometry.viewport);
        else bounds.extend(place.geometry.location);
      });
      map.fitBounds(bounds);
    });
  };

  // ✅ زر تحديد الموقع
  const addLocateMeButton = (map: google.maps.Map) => {
    const locationButton = document.createElement("button");
    locationButton.textContent = "📍 موقعي";
    locationButton.classList.add(
      "bg-white",
      "px-3",
      "py-1",
      "rounded",
      "shadow"
    );

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(locationButton);

    locationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const position = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            };
            map.setCenter(position);
            map.setZoom(14);
            new google.maps.Marker({
              position,
              map,
              title: "موقعي الحالي",
            });
          },
          () => alert("تعذر الحصول على موقعك الحالي")
        );
      }
    });
  };

  // ✅ أداة قياس المسافة
  const addDistanceMeasurement = (map: google.maps.Map) => {
    let polyline: google.maps.Polyline | null = null;
    let path: google.maps.LatLngLiteral[] = [];

    map.addListener("click", (e: any) => {
      path.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      if (!polyline) {
        polyline = new google.maps.Polyline({
          path,
          map,
          strokeColor: "#3b82f6",
          strokeWeight: 3,
        });
      } else {
        polyline.setPath(path);
      }
    });

    map.addListener("rightclick", () => {
      if (polyline) {
        const lengthInMeters = google.maps.geometry.spherical.computeLength(
          polyline.getPath()
        );
        alert(`المسافة: ${(lengthInMeters / 1000).toFixed(2)} كم`);
        polyline.setMap(null);
        polyline = null;
        path = [];
      }
    });
  };

  // ✅ إضافة العقارات
  const addPropertyMarkers = (map: google.maps.Map) => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    properties.forEach((property) => {
      const lat = Number.parseFloat(property.latitude);
      const lng = Number.parseFloat(property.longitude);
      if (isNaN(lat) || isNaN(lng)) return;

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: property.description,
        animation: google.maps.Animation.DROP,
      });

      const infoContent = createInfoWindowContent(property);

      marker.addListener("click", () => {
        if (infoWindowRef.current) {
          infoWindowRef.current.setContent(infoContent);
          infoWindowRef.current.open(map, marker);
        }
      });

      markersRef.current.push(marker);
    });

    if (markersRef.current.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      markersRef.current.forEach((m) => {
        const pos = m.getPosition();
        if (pos) bounds.extend(pos);
      });
      map.fitBounds(bounds);
    }
  };

  // ✅ محتوى نافذة المعلومات (JSX → HTML)
  const createInfoWindowContent = (property: RealEstesType): string => {
    const formatPrice = (price: string) =>
      new Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
        minimumFractionDigits: 0,
      }).format(Number.parseFloat(price));

    const jsx = (
      <div style={{ maxWidth: "150px", direction: "rtl" }}>
        <a
          href={`/real-estate/${property.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={property.main_image}
            alt={property.description}
            width={150}
            height={150}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <h3 style={{ margin: "8px 0", fontSize: "16px", fontWeight: "bold" }}>
            {property.description}
          </h3>
          <div>
            <strong>{formatPrice(property.main_price)}</strong>
          </div>
          <div>
            📍 {property.city} | 📐 {property.main_area} م²
          </div>
        </a>
      </div>
    );

    return ReactDOMServer.renderToString(jsx);
  };

  // ✅ تحميل Google Maps
  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        if (window.google && window.google.maps) {
          initializeMap();
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geometry&language=ar&region=SA&callback=initMap`;
        script.async = true;
        script.defer = true;
        (window as any).initMap = initializeMap;

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

    loadGoogleMaps();

    return () => {
      markersRef.current.forEach((m) => m.setMap(null));
      infoWindowRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (mapError) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50 border rounded-lg">
        <p className="text-red-500">{mapError}</p>
      </div>
    );
  }

  return (
    <div className="relative flex w-full h-96 border rounded-lg overflow-hidden">
      {isMapLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="animate-spin h-8 w-8 border-b-2 border-blue-600 rounded-full"></div>
        </div>
      )}

      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default FindRealEstateOnMap;
