"use client";

import type React from "react";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useState } from "react";
import Image from "next/image";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email submitted:", email);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full" dir="rtl">
      <Input
        type="email"
        placeholder="البريد"
        className="h-12"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        variant="ghost"
        size="sm"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 px-3 text-[10px] md:text-sm"
        disabled={!email || isSubmitting}
      >
        {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        <Image
          src="/Icons/SendArrow.svg"
          alt="send"
          width={20}
          height={20}
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </Button>
    </form>
  );
};

export default EmailInput;
