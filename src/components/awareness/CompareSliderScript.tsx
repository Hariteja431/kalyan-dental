"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __compareSliderBoot?: () => void;
  }
}

const SCRIPT_ID = "compare-slider-deferred-js";

export function CompareSliderScript() {
  useEffect(() => {
    const runBoot = () => {
      window.__compareSliderBoot?.();
    };

    if (window.__compareSliderBoot) {
      runBoot();
      return;
    }

    let existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "1") {
        runBoot();
      } else {
        existing.addEventListener("load", runBoot);
      }
      return;
    }

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "/assets/js/compare-slider.js";
    s.defer = true;
    s.onload = () => {
      s.dataset.loaded = "1";
      runBoot();
    };
    document.body.appendChild(s);
  }, []);

  return null;
}
