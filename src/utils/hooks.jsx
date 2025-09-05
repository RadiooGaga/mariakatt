import React from "react";
import { useState, useEffect } from "react";

export const useIsSmartphone = (breakpoint = 1279) => {
  const [isSmartphone, setIsSmartphone] = useState(false);

  useEffect(() => {
    const checkIsSmartphone = () => setIsSmartphone(window.innerWidth <= breakpoint);

    checkIsSmartphone();
    window.addEventListener('resize', checkIsSmartphone);

    return () => window.removeEventListener('resize', checkIsSmartphone);
  }, [breakpoint]);

  return isSmartphone;
};