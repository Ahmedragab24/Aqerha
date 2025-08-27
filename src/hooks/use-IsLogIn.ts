// hooks/useIsLoggedIn.ts
"use client";

import { useEffect, useState } from "react";
import { AUTH_CHANGE_EVENT, getAuthTokenClient } from "@/lib/auth/auth-client";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const checkAuth = () => {
    const token = getAuthTokenClient();
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkAuth();
    setIsMounted(true);

    const handler = () => {
      checkAuth();
    };

    window.addEventListener(AUTH_CHANGE_EVENT, handler);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT, handler);
  }, []);

  return { isLoggedIn, isMounted };
};

export default useIsLoggedIn;
