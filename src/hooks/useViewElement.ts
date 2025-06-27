"use client";

import { useEffect, useState } from "react";

export const useViewElement = (id: string) => {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsView(entry.isIntersecting);
      });
    });
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [id]);

  return isView;
};
