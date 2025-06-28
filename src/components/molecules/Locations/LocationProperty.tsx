import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const LocationProperty = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 text-right mb-4">
        الموقع
      </h2>
      <Card>
        <CardContent className="p-0">
          <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden relative">
            {/* Map placeholder with marker */}
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative">
              {/* Simulated map roads */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-30">
                  <path
                    d="M0,50 Q100,30 200,50 T400,50"
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M50,0 Q70,100 50,200 T50,400"
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M100,100 Q200,80 300,100 T500,100"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M150,50 Q170,150 150,250"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Map labels */}
              <div className="absolute top-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                Family Hill
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                Downtown
              </div>
              <div className="absolute top-1/3 left-1/4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                Park Area
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationProperty;
