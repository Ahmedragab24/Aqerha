import { BordersType } from "@/types/Actions";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  ArrowBigUpDash,
  ArrowBigDownDash,
  ArrowBigRightDash,
  ArrowBigLeftDash,
} from "lucide-react";

interface PropertyTrendsProps {
  borders: BordersType[];
}

const DirectionIcon = (direction: string) => {
  switch (direction) {
    case "شمال":
      return <ArrowBigUpDash className="w-4 h-4 text-gray-500" />;
    case "جنوب":
      return <ArrowBigDownDash className="w-4 h-4 text-gray-500" />;
    case "شرق":
      return <ArrowBigRightDash className="w-4 h-4 text-gray-500" />;
    case "غرب":
      return <ArrowBigLeftDash className="w-4 h-4 text-gray-500" />;
    default:
      return null;
  }
};

const PropertyTrends = ({ borders }: PropertyTrendsProps) => {
  return (
    <Card className="w-full border p-0 overflow-hidden shadow-md">
      <CardContent className="p-0">
        <Table className="text-center ">
          {/* Header */}
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-center text-gray-700 font-semibold text-sm border-l">
                الاتجاه
              </TableHead>
              <TableHead className="text-center text-gray-700 font-semibold text-sm border-l">
                الحد
              </TableHead>
              <TableHead className="text-center text-gray-700 font-semibold text-sm">
                الطول
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {borders.map((boundary, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 border-l text-center">
                  <div className="flex justify-center items-center gap-1">
                    {DirectionIcon(boundary.direction)}
                    <span className="text-gray-800 font-medium text-sm">
                      {boundary.direction}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 border-l text-center text-gray-800">
                  {boundary.border}
                </TableCell>
                <TableCell className="py-3 text-center text-gray-800">
                  {boundary.lengths}م
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PropertyTrends;
