import { AlertCircle, Archive, Bath, Bed, Home, Trash2, X } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import Image from "next/image";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mockProperty: any;
}

const PropertyForChatCard = ({ mockProperty }: Props) => {
  return (
    <div className="w-full lg:w-100 px-4">
      <div className="flex items-center justify-between mb-4">
        <X className="w-5 h-5 text-gray-400 cursor-pointer" />
        <div className="flex gap-2">
          <Archive className="w-5 h-5 text-gray-400 cursor-pointer" />
          <Trash2 className="w-5 h-5 text-gray-400 cursor-pointer" />
          <AlertCircle className="w-5 h-5 text-gray-400 cursor-pointer" />
        </div>
      </div>

      <Card className="pt-0 border-none">
        <CardContent className="p-0">
          <div className="relative w-full h-52">
            <Image
              src={mockProperty.image}
              alt={mockProperty.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{mockProperty.title}</h3>
            <p className="text-sm text-gray-600 mb-3">
              بالم هاربر، تكساس {mockProperty.year}
            </p>

            <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{mockProperty.bedrooms} غرف نوم</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{mockProperty.bathrooms} حمامات</span>
              </div>
              <div className="flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>{mockProperty.area}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">الحالة</span>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                نشط
              </Badge>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">المساحة المعيشية</span>
                <span>{mockProperty.size} متر مربع</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">جودة الإصلاح</span>
                <span>{mockProperty.listingType}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-600">سعر الإيجار</span>
                <span>
                  {mockProperty.price.toLocaleString()} {mockProperty.currency}
                  /شهر
                </span>
              </div>
            </div>

            <Button className="w-full mt-4 bg-green-100 text-green-800 hover:bg-green-200">
              عرض تفاصيل العقار
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyForChatCard;
