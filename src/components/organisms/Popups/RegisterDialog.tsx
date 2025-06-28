"use client";

import LogoGreen from "@/components/atoms/images/LogoGreen";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
import { RegisterType } from "@/types/Register";
import { Button } from "@/components/ui/button";
import LoginForm from "../forms/LoginForm";

const RegisterDialog = () => {
  const [type, setType] = useState<RegisterType>("login");

  return (
    <Dialog>
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
          {type === "login" && <LoginForm setType={setType} />}
          {type === "register" && <RegisterForm setType={setType} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
