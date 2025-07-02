"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Riyal from "@/components/atoms/Icons/Riyal";

// Payment methods data array
const paymentMethods = [
  {
    id: "apple-pay",
    label: "Apple Pay",
    icon: (
      <div className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
        Pay
      </div>
    ),
    isDefault: true,
  },
  {
    id: "bank-card",
    label: "بطاقة بنكية",
    icon: <CreditCard className="w-5 h-5 text-gray-600" />,
    isDefault: false,
  },
];

const SelectPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState("apple-pay");

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
        حدد طريقة الدفع
      </h2>

      {/* Payment options using RadioGroup */}
      <RadioGroup
        value={selectedPayment}
        onValueChange={setSelectedPayment}
        className="space-y-4 mb-8"
      >
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value={method.id}
                id={method.id}
                className="w-5 h-5 border-2 border-gray-400 focus:ring-primary"
              />
            </div>
            <Label
              htmlFor={method.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="text-gray-800 font-medium">{method.label}</span>
              {method.icon}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {/* Amount section */}
      <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
        <span className="text-gray-600 font-medium" dir="rtl">
          مبلغ العربون
        </span>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800">250,000</span>
          <Riyal className="text-primary !w-5 !h-5" />
        </div>
      </div>

      {/* Confirm button */}
      <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-lg transition-colors">
        <span dir="rtl">تأكيد الدفع</span>
      </button>
    </div>
  );
};

export default SelectPayment;
