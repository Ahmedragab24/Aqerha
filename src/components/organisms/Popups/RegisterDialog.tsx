"use client";

import LogoGreen from "../../atoms/images/LogoGreen";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { useState } from "react";
import RegisterForm from "../forms/Auth/RegisterForm";
import { RegisterType } from "@/types/Register";
import { Button } from "../../ui/button";
import LoginForm from "../forms/Auth/LoginForm";
import OtpForm from "../forms/Auth/OtpForm";
import ChangePhoneForm from "../forms/Auth/ChangePhoneForm";

const RegisterDialog = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<RegisterType>("login");
  const [phone, setPhone] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>تسجيل الدخول</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>
            <LogoGreen />
          </DialogTitle>
          <DialogDescription>
            {type === "register" && "مرحباً، أنشئ حساب عقرها جديد"}
            {type === "login" && "تسجيل الدخول لحساب عقرها"}
          </DialogDescription>
        </DialogHeader>

        <div>
          {type === "login" && <LoginForm setType={setType} setOpen={setOpen}/>}
          {type === "register" && (
            <RegisterForm setType={setType} setPhone={setPhone} />
          )}
          {type === "Otp" && <OtpForm setType={setType} phone={phone} />}
          {type === "ChangPhone" && (
            <ChangePhoneForm setType={setType} setPhone={setPhone} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
