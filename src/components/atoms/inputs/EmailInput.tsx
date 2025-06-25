"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <form onSubmit={handleSubmit} className="relative w-[320px]" dir="rtl">
      <Input
        type="email"
        placeholder="أدخل البريد الإلكتروني الخاص بك"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 px-3"
        disabled={!email || isSubmitting}
      >
        {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        <Image src="Icons/SendArrow.svg" alt="send" width={20} height={20} />
      </Button>
    </form>
  );
};

export default EmailInput;
