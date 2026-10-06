"use client";

import { useEffect } from "react";

export default function TawkToWidget() {
  useEffect(() => {
    // ensure globals, not React local vars
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/686bb0dca86aec190ca6b4f4/1ivialoc3";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);

    return () => {
      const iframe = document.querySelector("iframe[src*='tawk.to']");
      if (iframe) iframe.remove();
    };
  }, []);

  return null;
}
