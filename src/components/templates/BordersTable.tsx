"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface BorderEntry {
  direction: string;
  border: string;
  lengths: string;
}

interface BordersTableProps {
  borders: BorderEntry[];
  setBorders: (borders: BorderEntry[]) => void;
}

export default function BordersTable({
  borders,
  setBorders,
}: BordersTableProps) {
  const updateBorder = (
    index: number,
    field: "border" | "lengths",
    value: string
  ) => {
    const newBorders = [...borders];
    newBorders[index][field] = value;
    setBorders(newBorders);
  };

  return (
    <div className="w-full bg-background" dir="rtl">
      <div className="w-full mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              الحدود و الأطوال
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-4 text-right font-semibold">
                      الاتجاهات
                    </th>
                    <th className="border border-border p-4 text-right font-semibold">
                      الحدود
                    </th>
                    <th className="border border-border p-4 text-right font-semibold">
                      الأطوال
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {borders.map((entry, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="border border-border p-4 font-medium">
                        {entry.direction}
                      </td>
                      <td className="border border-border p-4">
                        <Input
                          value={entry.border}
                          onChange={(e) =>
                            updateBorder(index, "border", e.target.value)
                          }
                          placeholder="الحد"
                          className="text-right"
                        />
                      </td>
                      <td className="border border-border p-4">
                        <Input
                          value={entry.lengths}
                          onChange={(e) =>
                            updateBorder(index, "lengths", e.target.value)
                          }
                          placeholder="الطول"
                          className="text-right"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
