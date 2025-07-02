import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const LocationProperty = () => {
  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/Images/cc39f8c1083cafeae44fa7b95aeb7d0a24c04f1f.png"
            alt="location"
            fill
            className="object-cover"
          />

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
      </CardContent>
    </Card>
  );
};

export default LocationProperty;
