"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { useState } from "react";
import Riyal from "../../atoms/Icons/Riyal";
import { Badge } from "@/components/ui/badge";
import { timeAgo } from "@/lib/utils";

interface PaymentPlansDialogProps {
  children: React.ReactNode;
  biddingActivity: {
    created_at: string;
    id: number;
    offer: number;
    user: {
      id: number;
      name: string;
    };
  }[];
  highest_offer: number;
  meter_price: number;
}

const AuctionsRecordDialog = ({
  children,
  biddingActivity,
  highest_offer,
  meter_price,
}: PaymentPlansDialogProps) => {
  const [open, changeOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-md mx-auto max-h-[90vh] overflow-y-auto"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            سجل المزايدات
          </DialogTitle>
          <DialogDescription>
            المزايدات ( {biddingActivity.length} )
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <ul className="space-y-6 list-disc">
            {biddingActivity.map((item) => (
              <li
                key={item.id}
                className={`list-none border-b border-gray-300 p-2 pb-4 rounded-md ${
                  item.offer === highest_offer ? "bg-[#ECFDF3]" : ""
                }`}
              >
                <Badge
                  variant="secondary"
                  className="bg-transparent text-gray-800 !p-0 mb-2"
                >
                  <h1>{timeAgo(item?.created_at)}</h1>
                </Badge>

                <div className="flex justify-between items-center gap-6 text-lg font-medium">
                  <div className="flex flex-col items-center gap-2">
                    <h1>{item.user?.name}</h1>
                    {item.offer === highest_offer ? (
                      <Badge
                        variant="secondary"
                        className="bg-primary text-gray-100 pointer-events-none px-4 md:px-8 py-2 text-sm md:text-base shadow-md"
                      >
                        <h1>أعلى مزايدة</h1>
                      </Badge>
                    ) : null}
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-primary font-medium">
                      <span>{item.offer}</span>
                      <Riyal className="!w-6 !h-6" />
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>{meter_price}</span>
                      <Riyal />
                      <span>/متر مربع</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Button className="w-full h-11" onClick={() => changeOpen(false)}>
            تم
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuctionsRecordDialog;
