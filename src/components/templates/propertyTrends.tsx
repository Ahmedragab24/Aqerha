import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const boundariesData = [
  {
    direction: "شمال",
    icon: <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
    length: "م25",
    details: "قطعة رقم 76",
    boundary: "الحد",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-l-blue-500",
  },
  {
    direction: "شرق",
    icon: <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />,
    length: "م20",
    details: "شارع عرض م12",
    boundary: "الحد",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-l-orange-500",
  },
  {
    direction: "جنوب",
    icon: <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
    length: "م25",
    details: "قطعة رقم 76",
    boundary: "الحد",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-l-purple-500",
  },
  {
    direction: "غرب",
    icon: <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />,
    length: "م20",
    details: "شارع عرض م12",
    boundary: "الحد",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-l-green-500",
  },
];

const PropertyTrends = () => {
  return (
    <Card className="w-full">
      <CardHeader className="text-center pb-3 sm:pb-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          الحدود والأطوال
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        {/* Desktop Table View */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-right font-bold text-gray-700 text-sm">
                    الاتجاه
                  </TableHead>
                  <TableHead className="text-right font-bold text-gray-700 text-sm">
                    الطول
                  </TableHead>
                  <TableHead className="text-right font-bold text-gray-700 text-sm">
                    التفاصيل
                  </TableHead>
                  <TableHead className="text-right font-bold text-gray-700 text-sm">
                    نوع الحد
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {boundariesData.map((boundary, index) => (
                  <TableRow
                    key={index}
                    className={`${boundary.bgColor} hover:opacity-80 transition-opacity border-l-4 ${boundary.borderColor}`}
                  >
                    <TableCell className="font-medium py-3">
                      <div className="flex items-center gap-2">
                        {boundary.icon}
                        <span className="text-base font-semibold text-gray-700">
                          {boundary.direction}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3">
                      <span
                        className={`text-xl font-bold ${boundary.textColor}`}
                      >
                        {boundary.length}
                      </span>
                    </TableCell>
                    <TableCell className="py-3">
                      <span className="text-gray-600 font-medium text-sm">
                        {boundary.details}
                      </span>
                    </TableCell>
                    <TableCell className="py-3">
                      <span className="text-gray-500 text-xs">
                        {boundary.boundary}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {boundariesData.map((boundary, index) => (
            <div
              key={index}
              className={`${boundary.bgColor} rounded-lg border-r-4 ${boundary.borderColor} p-4`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {boundary.icon}
                  <span className="text-base font-semibold text-gray-700">
                    {boundary.direction}
                  </span>
                </div>
                <span className={`text-lg font-bold ${boundary.textColor}`}>
                  {boundary.length}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">
                  {boundary.details}
                </span>
                <span className="text-gray-500 text-xs">
                  {boundary.boundary}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg border">
          <h3 className="font-bold text-gray-700 mb-2 text-sm sm:text-base text-center">
            ملخص المساحة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex justify-center xs:flex-col xs:justify-start">
              <span className="text-gray-600">إجمالي المحيط: </span>
              <span className="font-bold text-gray-800">م90</span>
            </div>
            <div className="flex justify-center xs:flex-col xs:justify-start">
              <span className="text-gray-600">المساحة التقريبية: </span>
              <span className="font-bold text-gray-800">م² 500</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyTrends;
